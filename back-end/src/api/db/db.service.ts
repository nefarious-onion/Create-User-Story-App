import mongoose from 'mongoose';
import { MONGODB_URI } from '../../utils/config';

export const mongoConnect = () => {
    mongoose
        .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('connected to MongoDB'))
        .catch(error => console.log('error while connecting to MongoDB', error.message))
}
