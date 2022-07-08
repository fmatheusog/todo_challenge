import express from 'express';
import TaskRoutes from './routes/task.routes';

export default class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.config();
  }

  private config() {
    this.express.use(express.json());

    // Routes
    this.express.use('/tasks', TaskRoutes);
  }

  public start(port: number | string = 3001) {
    this.express.listen(port, () => {
      console.log(`Server running at: http://localhost:${port}`);
    })
  }
}
