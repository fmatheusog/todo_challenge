import FindByIdController from './FindByIdController';
import FindByIdUseCase from './FindByIdUseCase';
import TaskModel from '../../../repositories/implementations/mongodb/models/task.model';
import { mongooseTaskModel } from '../../../repositories/implementations/mongodb/schemas/task.schema';

const taskRepository = new TaskModel(mongooseTaskModel);
const findByIdUseCase = new FindByIdUseCase(taskRepository);
const findByIdController = new FindByIdController(findByIdUseCase);

export { findByIdController };