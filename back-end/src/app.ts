import { PORT, MODE } from './utils/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import { router as userstoryRouter } from './api/userstory/userstory.controller';
import { router as epicRouter } from './api/epic/epic.controller';
import { router as userRouter } from './api/user/user.controller';
import { unknownEndpoint, errorHandler } from './utils/middleware';
import { mongoConnect } from './api/db/db.service';

const app = express();
mongoConnect()

app.use(cors())
app.use(express.static(path.join(__dirname, '../', '../', 'front-end', 'build')))
app.use(express.json())

app.use('/api/user', userRouter);
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
