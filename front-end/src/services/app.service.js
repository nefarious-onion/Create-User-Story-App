import axios from 'axios';

const EPIC_URL = 'http://localhost:8000/epic';

export const getEpics = () => axios.get(EPIC_URL).then(response => response.data);