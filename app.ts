import express, { Express, Request, Response } from 'express';
import router from './routes/index.js'
import { db } from './models/index'

const app: Express = express();
const port = 5000;

(async () => {
  await db.sequelize.sync();
})();
  

app.use('/',router)

app.listen(port, () => {
  console.log(`Your core service is running at http://localhost:${port}`);
});