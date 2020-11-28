import { PORT, MODE, isDev } from './utils/config';
import express from 'express';
require('express-async-errors');
import cors from 'cors';
import path from 'path';
import { router as userstoryRouter } from './api/userstory/userstory.router';
import { router as epicRouter } from './api/epic/epic.router';
import { unknownEndpoint, errorHandler } from './utils/middleware';
import { mongoConnect } from './api/db/db.service';

const app = express();
mongoConnect()

if (isDev) {
  app.use(cors())
}
app.use(express.static(path.join(__dirname, '../', '../', 'front-end', 'build')))
app.use(express.json())

app.use('/api/epic', epicRouter);
app.use('/api/userstory', userstoryRouter);
app.get('/ping', (req, res) => {
  res.send('hello world');
});
app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} in ${MODE}`);
})
