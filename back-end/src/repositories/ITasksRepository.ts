import IGenericRepository from './IGenericRepository';
import ITask from '../entities/ITask';

type ITasksRepository = IGenericRepository<ITask>

export default ITasksRepository;

