import mongoose from 'mongoose';
import userstorySchema, { IUserstory } from './userstory.schema';

const Userstory = mongoose.model<IUserstory>('Userstory', userstorySchema);

export default Userstory;