import mongoose, { Schema, Document } from 'mongoose';

export interface IUserstory extends Document {
    title: string;
}

const userstorySchema: Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
})

userstorySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default userstorySchema