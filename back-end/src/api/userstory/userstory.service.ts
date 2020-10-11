import Userstory from './userstory.model';
import epicService from '../epic/epic.service';
import { IEpic } from '../epic/epic.schema';

const getStories = async () => {
    return await Userstory.find({})
}

const getStory = async (id: string) => {
    return await Userstory.findById(id)
}

interface UserstoryData {
    title: string;
    id?: string;
    epic: IEpic['id']
}
const createStory = async (data: UserstoryData) => {
    const foundEpic = await epicService.getEpic(data.epic);
    if (!foundEpic) {
        return false;
    }
    const story = new Userstory({
        title: data.title,
        epic: data.epic
    });
    const savedStory = await story.save()
    foundEpic.stories.push(savedStory._id);
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