import mongoose from 'mongoose';
import epicSchema, { IEpic } from './epic.schema';

const Epic = mongoose.model<IEpic>('Epic', epicSchema);

export default Epic;