import mongoose from 'mongoose';
import userSchema, { IUser } from './user.schema';

const User = mongoose.model<IUser>('User', userSchema);

export default User;