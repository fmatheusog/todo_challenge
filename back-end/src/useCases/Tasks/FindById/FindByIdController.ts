import { Request, Response } from 'express';
import FindByIdUseCase from './FindByIdUseCase';

export default class FindAllController {
  constructor(
    private findByIdUseCase: FindByIdUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const task = await this.findByIdUseCase.execute({ id });

    if(task === null) return res.status(404).json({ message: 'task not found' });
    return res.status(200).json(task);
  }
}
