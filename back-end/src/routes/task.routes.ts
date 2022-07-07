import { Router } from 'express';
import { findAllController } from '../useCases/Tasks/FIndAll';

const TaskRoutes = Router();

TaskRoutes.get('/', (req, res) => findAllController.handle(req, res));
TaskRoutes.get('/:id');
TaskRoutes.post('/');
TaskRoutes.put('/:id');
TaskRoutes.delete('/:id');

export default TaskRoutes;
