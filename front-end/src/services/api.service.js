import axios from 'axios';

const EPIC_URL = 'http://localhost:8000/epic/';

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

export const createStory = async (newstory, epicId) => {
    const STORY_URL = EPIC_URL + `${epicId}/userstory`;
    const  savedStory = { title: newstory };

    try {
        const response = await axios.post(STORY_URL, savedStory);
        console.log('story saved', response.data);
    } catch (error) {
        console.log('story not saved', error);
    }
}