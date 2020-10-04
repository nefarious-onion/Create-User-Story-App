import { ErrorRequestHandler, RequestHandler } from 'express';

export const unknownEndpoint: RequestHandler = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

export const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    console.error(error.message)
    next(error)
}