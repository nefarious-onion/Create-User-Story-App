import Userstory from './userstory.model';
import epicService from '../epic/epic.service';

const getStories = async () => {
    return await Userstory.find({})
}

const getStory = async (id: string) => {
    return await Userstory.findById(id)
}

interface UserstoryData {
    title: string;
    id?: string
}
const createStory = async (epicId: string, content: UserstoryData) => {
    const foundEpic = await epicService.getEpic(epicId);
    if (!foundEpic) {
        return false;
    }
    const story = new Userstory(content);
    const savedStory = await story.save()
    foundEpic.stories.unshift(savedStory._id);
    foundEpic.save()
    return savedStory;
}

const patchStory = async (id: string, updatedContent: UserstoryData) => {
    return await Userstory.findByIdAndUpdate(id, updatedContent, { new: true });
}

const deleteStory = async (id: string) => {
    return await Userstory.findByIdAndDelete(id)
}

export default {
    getStories,
    getStory,
    createStory,
    patchStory,
    deleteStory,
}