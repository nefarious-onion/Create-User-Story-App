"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var epic_schema_1 = __importDefault(require("./epic.schema"));
var Epic = mongoose_1.default.model('Epic', epic_schema_1.default);
exports.default = Epic;
