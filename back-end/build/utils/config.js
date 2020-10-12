"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODE = exports.FRONTEND_ORIGIN = exports.isDev = exports.MONGODB_URI = exports.PORT = void 0;
//require('dotenv').config()
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = 8000;
exports.MONGODB_URI = process.env.DB_URI;
exports.isDev = process.env.NODE_ENV === 'development';
exports.FRONTEND_ORIGIN = "http://localhost:3000";
exports.MODE = process.env.NODE_ENV;
