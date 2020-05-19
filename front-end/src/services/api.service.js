import axios from 'axios';

const EPIC_URL = '/epic/';

export const getEpics = () => axios.get(EPIC_URL).then(response => response.data);

export const createEpic = async (epicName) => {
    const savedEpic = { title: epicName }
    try {
        const response = await axios.post(EPIC_URL, savedEpic);
        console.log('epic saved', response.data);
    } catch (error) {
        console.log('epic not saved', error)
    }
}

export const getEpic = id => axios.get(EPIC_URL + id).then(response => response.data);

export const deleteEpic = async (id) => {
    try {
        const response = await axios.delete(EPIC_URL + id);
        console.log('epic deleted', response.data);
    } catch (error) {
        console.log('epic not deleted', error);
    }
    
}

export const createStory = async (newstory, epicId) => {
    const STORY_URL = EPIC_URL + `${epicId}/userstory`;
    const savedStory = { title: newstory };

    try {
        const response = await axios.post(STORY_URL, savedStory);
        console.log('story saved', response.data);
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