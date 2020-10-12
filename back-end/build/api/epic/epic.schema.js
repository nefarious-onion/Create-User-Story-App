"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var epicSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    stories: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Userstory"
        }
    ]
});
epicSchema.set('toJSON', {
    transform: function (document, returnedObject) {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
exports.default = epicSchema;
