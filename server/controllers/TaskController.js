import express from 'express';
const router = express.Router();
import Task from '../models/Task.js';
import jwt from 'jsonwebtoken'

// const authMiddleware = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).send('Unauthorized');
//   jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
//     if (err) return res.status(401).send('Unauthorized');
//     req.userId = decoded.userId;
//     next();
//   });
// };
// router.use(authMiddleware);

export const createTask = async (req, res) => {

    const { title,description } = req.body;
    try {

      const task = new Task({ title,description, userId: req.userId });
      await task.save();
      console.log(req.userId)
      res.status(201).json(task);
    } catch (error) {
      res.status(400).send(error.message);
    }
    console.log(req.userId,"inside task controller")  
  };

  export const getTask=async (req, res) => {
    try {
      const tasks = await Task.find({ userId: req.userId });
      res.json(tasks);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  export const deleteTask= async (req, res) => {
    const { id } = req.params;
    try {
      console.log(req.userId,'jdjdhfj')
      const task = await Task.findOneAndDelete({ _id: id, userId: req.userId });
      if (!task) return res.status(404).send('Task not found');
      res.json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).send(error.message);
      }
  console.log("hello world")
  };
  
  export const updateTask= async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      console.log("update id",id)
      const task = await Task.findOneAndUpdate({ _id: id, userId: req.userId }, { title, description }, { new: true });
      if (!task) return res.status(404).send('Task not found');
      res.json(task);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  