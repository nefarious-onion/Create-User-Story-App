import mongoose, { Schema, Document } from 'mongoose';
import { IEpic } from '../epic/epic.schema';

export interface IUserstory extends Document {
    title: string;
    epic: IEpic
}

const userstorySchema: Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    epic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Epic"
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