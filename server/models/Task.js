// models/Task.js
import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: String,
  description:String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Task =mongoose.model('Task', taskSchema);
export default Task;
