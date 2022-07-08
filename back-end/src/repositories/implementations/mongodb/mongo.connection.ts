import mongoose from 'mongoose';

export default class MongoConnection {
  static async connect(URI = 'mongodb://localhost:27017/todo_db') {
    await mongoose.connect(URI);
  }
}
