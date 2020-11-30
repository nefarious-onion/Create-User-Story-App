import axios from 'axios';
import { baseUrl } from './config';
import { EpicData, Epic, Userstory } from '../services/api.interface';
const EPIC_URL = `${baseUrl}/epic/`;
const STORY_URL = `${baseUrl}/userstory/`;

export const getEpics = () => axios.get<Epic[]>(EPIC_URL).then(response => response.data);

export const createEpic = async (epic: EpicData) => {
    const response = await axios.post<Epic>(EPIC_URL, epic);
    const createdEpic = response.data;
    console.log('epic created', createdEpic);
}

export const getEpic = (id: Epic['id']) => axios.get<Epic>(`${EPIC_URL}${id}`).then(response => response.data);

export const deleteEpic = async (id: Epic['id']) => {
    await axios.delete(`${EPIC_URL}${id}`);
    console.log('epic deleted');
}

interface CreateUserstoryData {
    title: string;
    epic: Epic['id'];
}
export const createStory = async (userstory: CreateUserstoryData) => {
    const response = await axios.post<Userstory>(STORY_URL, userstory);
    const savedStory = response.data;
    console.log('story saved', savedStory);
}

export const deleteStory = async (storyId: Userstory['id']) => {
    try {
        const response = await axios.delete(`${STORY_URL}${storyId}`);
        console.log('story deleted', response.data);
    } catch (error) {
        console.log('error occured', error);

    }

}

export const getStory = async (storyId: Userstory['id']) => {
    const response = await axios.get<Userstory>(`STORY_URL${storyId}`);
    return response.data;
}