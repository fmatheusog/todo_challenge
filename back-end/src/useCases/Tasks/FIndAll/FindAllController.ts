import { Request, Response } from 'express';
import FindAllUseCase from './FindAllUseCase';

export default class FindAllController {
  constructor(
    private findAllUseCase: FindAllUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const tasks = await this.findAllUseCase.execute();

    return res.status(200).json(tasks);
  }
}
