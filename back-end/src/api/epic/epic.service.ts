import Epic from './epic.model';

const getEpics = async () => {
    return await Epic.find({}).select('-stories');
}

const getEpic = async (id: string) => {
    return await Epic
        .findById(id)
        .populate('stories')
}

interface EpicData {
    title: string;
    id?: string
}
const createEpic = async (content: EpicData) => {
    const epic = new Epic(content);
    return await epic.save();
}
const patchEpic = async (id: string, updatedContent: EpicData) => {
    return await Epic.findByIdAndUpdate(id, updatedContent, { new: true })
}

const deleteEpic = async (id: string) => {
    return await Epic.findByIdAndDelete(id)
}

export default {
    getEpics,
    getEpic,
    createEpic,
    patchEpic,
    deleteEpic,
}