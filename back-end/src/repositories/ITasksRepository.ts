import ITask from '../entities/ITask';

export default interface ITasksRepository {
  findAll(): Promise<ITask[]>;
  findById(id: number): Promise<ITask>;
  create(data: ITask): Promise<ITask>;
  update(data: ITask): Promise<ITask>;
  delete(id: number): Promise<boolean>;
}
