import express from 'express';
import { createTask, deleteTask, getTask,updateTask } from '../controllers/TaskController.js';
const router=express.Router();
import authMiddleware from '../auth/auth.js';  


// Apply middleware globally to all routes in this router
router.use(authMiddleware);

router.post('/createTask',authMiddleware,createTask)
router.get('/getTask',authMiddleware,getTask)
router.delete('/deleteTask/:id', authMiddleware, deleteTask)
router.put('/updateTask/:id', authMiddleware, updateTask)

export default router;