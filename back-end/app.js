const express = require('express');
const userstoryRouter = require('./api/userstory/userstory.router');
const epicRouter = require('./api/epic/epic.router');
const dbService = require('./api/db/db.service');
const path = require('path');
const FRONTEND_ORIGIN = "http://localhost:3000";

const PORT = process.env.PORT || 8000;

const isDev = process.env.NODE_ENV === 'development';

const app = express();
dbService.connect();

app.use(express.json());




if (isDev) {
  //allow chrome to do ajax call
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
  });
} else {
  app.use(express.static(path.join(__dirname, '../', 'front-end', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'front-end', 'build', 'index.html'));
  });

}
app.use('/api/epic', epicRouter);
app.use('/api/epic/:id/userstory', userstoryRouter);
app.get('/ping', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log('Server started', PORT);
  console.log('NODE_ENV=', process.env.NODE_ENV)
})
