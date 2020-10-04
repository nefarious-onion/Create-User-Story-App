"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userstory_schema_1 = __importDefault(require("./userstory.schema"));
var Userstory = mongoose_1.default.model('Userstory', userstory_schema_1.default);
exports.default = Userstory;
