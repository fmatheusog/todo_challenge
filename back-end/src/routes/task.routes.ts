import { Router } from 'express';
import {
  findAllController,
  findByIdController,
} from '../useCases/Tasks';
const TaskRoutes = Router();

TaskRoutes.get('/', (req, res) => findAllController.handle(req, res));
TaskRoutes.get('/:id', (req, res) => findByIdController.handle(req, res));
TaskRoutes.post('/');
TaskRoutes.put('/:id');
TaskRoutes.delete('/:id');

export default TaskRoutes;
