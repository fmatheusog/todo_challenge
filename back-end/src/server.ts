import * as dotenv from 'dotenv';
import App from './app';
import MongoConnection from './repositories/implementations/mongodb/mongo.connection';

dotenv.config();

async function main() {
  try {
    const { SERVER_PORT, DB_HOST } = process.env;
    const app = new App();
    await MongoConnection.connect(`mongodb://${DB_HOST}:/todo_db`);
    app.start(SERVER_PORT);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

main();
