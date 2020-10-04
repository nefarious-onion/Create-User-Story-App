import { PORT, MODE } from './utils/config';
import express from 'express';
require('express-async-errors');
import cors from 'cors';
//import path from 'path';
import { router as userstoryRouter } from './api/userstory/userstory.router';
import { router as epicRouter } from './api/epic/epic.router';
import { unknownEndpoint, errorHandler } from './utils/middleware';
import { mongoConnect } from './api/db/db.service';

const app = express();
mongoConnect()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

// if (isDev) {
//   app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
//     next();
//   });
// } else {
//   app.use(express.static(path.join(__dirname, '../', 'front-end', 'build')));

//   app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../', 'front-end', 'build', 'index.html'));
//   });

// }
app.use('/api/epic', epicRouter);
app.use('/api/epic/:id/userstory', userstoryRouter);
app.get('/ping', (req, res) => {
  res.send('hello world');
});
app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} in ${MODE}`);
})
