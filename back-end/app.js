const express = require('express');
const userstoryRouter = require('./api/userstory/userstory.router');
const epicRouter = require('./api/epic/epic.router');
const dbService = require('./api/db/db.service');

const PORT = 8000;
const FRONTEND_ORIGIN = "http://localhost:3000";

const app = express();
dbService.connect();

app.use(express.json());

//allow chrome to do ajax call
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
})

app.use('/epic', epicRouter);
app.use('/epic/:id/userstory', userstoryRouter);


app.listen(PORT, () => {
    console.log('Server started', PORT);
})
