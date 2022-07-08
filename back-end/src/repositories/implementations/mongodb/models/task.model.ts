import { Model } from 'mongoose';
import GenericModel from './generic.model';
import ITasksRepository from '../../../ITasksRepository';
import ITask from '../../../../entities/ITask';

export default class TaskModel extends GenericModel<ITask> implements ITasksRepository {
  constructor(mongooseModel: Model<ITask>) {
    super(mongooseModel);
  }
}
