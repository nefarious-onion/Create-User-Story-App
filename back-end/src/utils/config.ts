import dotenv from 'dotenv';
dotenv.config()

export const PORT = process.env.PORT || 8000;
export const MONGODB_URI = process.env.DB_URI as string;
export const isDev = process.env.NODE_ENV === 'development';
export const MODE = process.env.NODE_ENV