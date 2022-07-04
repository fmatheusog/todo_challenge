import * as dotenv from 'dotenv';
import App from './app';

dotenv.config();

async function main() {
  try {
    const { SERVER_PORT } = process.env;
    const app = new App();
    app.start(SERVER_PORT);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

main();
