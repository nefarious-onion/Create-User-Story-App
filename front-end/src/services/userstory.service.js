import axios from 'axios';

const STORY_URL = 'http://localhost:8000/userstory';

export const getStories = () => axios.get(STORY_URL).then(response => response.data);