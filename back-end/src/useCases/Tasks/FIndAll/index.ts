import FindAllController from './FindAllController';
import FindAllUseCase from './FindAllUseCase';
import TaskModel from '../../../repositories/implementations/mongodb/models/task.model';
import { mongooseTaskModel } from '../../../repositories/implementations/mongodb/schemas/task.schema';

const taskRepository = new TaskModel(mongooseTaskModel);
const findAllUseCase = new FindAllUseCase(taskRepository);
const findAllController = new FindAllController(findAllUseCase);

export { findAllController };