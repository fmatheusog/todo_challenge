import ITasksRepository from '../../../repositories/ITasksRepository';
import IFindByIdDTO from './FindByIdDTO';

export default class FindByIdUseCase {
  constructor(
    private tasksRepository: ITasksRepository,
  ) {}

  async execute(data: IFindByIdDTO) {
    const { id } = data;
    const task = await this.tasksRepository.findById(id);

    return task;
  }
}
