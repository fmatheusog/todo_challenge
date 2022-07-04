import { Request, Response } from 'express';
import FindByIdUseCase from './FindByIdUseCase';

export default class FindAllController {
  constructor(
    private findByIdUseCase: FindByIdUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const task = await this.findByIdUseCase.execute({ id: parseInt(id) });

    return res.status(200).json(task);
  }
}
