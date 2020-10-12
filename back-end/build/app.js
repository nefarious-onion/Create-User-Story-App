"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./utils/config");
var express_1 = __importDefault(require("express"));
require('express-async-errors');
var cors_1 = __importDefault(require("cors"));
//import path from 'path';
var userstory_router_1 = require("./api/userstory/userstory.router");
var epic_router_1 = require("./api/epic/epic.router");
var middleware_1 = require("./utils/middleware");
var db_service_1 = require("./api/db/db.service");
var app = express_1.default();
db_service_1.mongoConnect();
app.use(cors_1.default());
app.use(express_1.default.static('build'));
app.use(express_1.default.json());
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
app.use('/api/epic', epic_router_1.router);
app.use('/api/epic/:id/userstory', userstory_router_1.router);
app.get('/ping', function (req, res) {
    res.send('hello world');
});
app.use(middleware_1.unknownEndpoint);
app.use(middleware_1.errorHandler);
app.listen(config_1.PORT, function () {
    console.log("Server started on port " + config_1.PORT + " in " + config_1.MODE);
});
