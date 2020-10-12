import mongoose, { Schema, Document } from 'mongoose';
import { IUserstory } from '../userstory/userstory.schema';

export interface IEpic extends Document {
    title: string;
    stories: IUserstory[];
}

const epicSchema: Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    stories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Userstory"
        }
    ]
})

epicSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

export default epicSchema;