"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.unknownEndpoint = void 0;
exports.unknownEndpoint = function (request, response) {
    response.status(404).send({ error: 'unknown endpoint' });
};
exports.errorHandler = function (error, request, response, next) {
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' });
    }
    else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message });
    }
    console.error(error.message);
    next(error);
};
