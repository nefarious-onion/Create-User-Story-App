const express = require('express');

const PORT = 8000;
const FRONTEND_ORIGIN = "http://localhost:3000";

const app = express();

//allow chrome to do ajax call
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
})

app.listen(PORT, () => {
    console.log('Server started', PORT);
})
