import mongoose, { Document } from "mongoose"
import uniqueValidator from 'mongoose-unique-validator'

export interface IUser extends Document {
    username: string;
    name: string;
    passwordHash: string;
    //projects: IProject[]
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 3,
        required: true,
        unique: true
    },
    name: String,
    passwordHash: String,
    // projects: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'project'
    //     }
    //]
})

userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' })

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

export default userSchema