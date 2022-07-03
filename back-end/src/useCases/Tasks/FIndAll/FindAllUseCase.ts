import ITasksRepository from '../../../repositories/ITasksRepository';

export default class FindAllUseCase {
  constructor(
    private tasksRepository: ITasksRepository,
  ) {}

  async execute() {
    const allTasks = await this.tasksRepository.findAll();

    return allTasks;
  }
}
