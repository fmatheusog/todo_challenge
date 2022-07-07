import { Model, isValidObjectId } from 'mongoose';
import IGenericRepository from '../../../IGenericRepository';

export default abstract class GenericModel<T> implements IGenericRepository<T> {
  constructor(
    protected _mongooseModel: Model<T>,
  ) {}

  async create(entity: T): Promise<T> {
    return this._mongooseModel.create(entity);
  }

  async update(id: string, entity: T): Promise<T | null> {
    if(!isValidObjectId(id)) return null;
    return this._mongooseModel.findOneAndUpdate({ _id: id }, entity, { returnOriginal: false });
  }

  async findAll(): Promise<T[]> {
    return this._mongooseModel.find();
  }

  async findById(id: string): Promise<T | null> {
    if(!isValidObjectId(id)) return null;
    return this._mongooseModel.findById(id);
  }

  async deleteById(id: string): Promise<void> {
    if(!isValidObjectId) return;
    await this._mongooseModel.deleteOne({ _id: id });
  }
}
