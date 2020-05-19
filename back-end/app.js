const express = require('express');
const userstoryRouter = require('./api/userstory/userstory.router');
const epicRouter = require('./api/epic/epic.router');
const dbService = require('./api/db/db.service');
const path = require('path');

const PORT = process.env.PORT || 8000;
const FRONTEND_ORIGIN = "http://localhost:3000";

const app = express();
dbService.connect();

app.use(express.json());

app.use(express.static(path.join(__dirname,'../', 'front-end', 'build')));

//allow chrome to do ajax call
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
});

app.use('/api/epic', epicRouter);
app.use('/api/epic/:id/userstory', userstoryRouter);

app.get('/ping', (req, res) => {
    res.send('hello world');
  });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'front-end', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server started', PORT);
})
