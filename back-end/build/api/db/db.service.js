"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("../../utils/config");
exports.mongoConnect = function () {
    mongoose_1.default
        .connect(config_1.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(function () { return console.log('connected to MongoDB'); })
        .catch(function (error) { return console.log('error while connecting to MongoDB', error.message); });
};
