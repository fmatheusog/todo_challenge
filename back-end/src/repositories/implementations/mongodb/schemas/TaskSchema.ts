import { model, Schema } from 'mongoose';
import ITask from '../../../../entities/ITask';

const taskSchema = new Schema<ITask>({
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const mongooseTaskModel = model<ITask>('task', taskSchema);

export default { taskSchema, mongooseTaskModel };