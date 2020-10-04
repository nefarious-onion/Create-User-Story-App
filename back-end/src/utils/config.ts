//require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config()

export const PORT = 8000;
export const MONGODB_URI = process.env.DB_URI as string;
export const isDev = process.env.NODE_ENV === 'development';
export const FRONTEND_ORIGIN = "http://localhost:3000";
export const MODE = process.env.NODE_ENV