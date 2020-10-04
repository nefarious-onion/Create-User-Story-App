import axios from 'axios';
import { baseUrl } from '../config';
import { Epic, Userstory } from '../services/api.interface';
const EPIC_URL = `${baseUrl}api/epic/`;

export const getEpics = () => axios.get(EPIC_URL).then(response => response.data);

export const createEpic = async (epic: Epic) => {
    try {
        const response = await axios.post(EPIC_URL, epic);
        const createdEpic = response.data;
        console.log('epic created', createdEpic);
    } catch (error) {
        console.log('epic not created', error)
    }
}

export const getEpic = (id: string )=> axios.get(EPIC_URL + id).then(response => response.data);

export const deleteEpic = async (id: string) => {
    try {
        await axios.delete(EPIC_URL + id);
        console.log('epic deleted');
    } catch (error) {
        console.log('epic not deleted', error);
    }
}

export const createStory = async (userstory: Userstory, epicId: string) => {
    const STORY_URL = EPIC_URL + `${epicId}/userstory`;
    try {
        const response = await axios.post(STORY_URL, userstory);
        const savedStory = response.data;
        console.log('story saved', savedStory);
    } catch (error) {
        console.log('story not saved', error);
    }
}

export const deleteStory = async (epicId, storyId) => {
    const STORY_URL = EPIC_URL + `${epicId}/userstory/${storyId}`;

    try {
        const response = await axios.delete(STORY_URL);
        console.log('story deleted', response.data);
    } catch (error) {
        console.log('story not deleted', error);
    }

}

export const getStory = async (epicId, storyId) => {
    const STORY_URL = EPIC_URL + `${epicId}/userstory/${storyId}`;
       
        try {
            const response = await axios.get(STORY_URL);
            return response.data;
        } catch (error) {
            console.log(error);
        }

}