const isDev = window.location.hostname === 'localhost';

export const baseUrl = isDev ? 'http://localhost:8000/api' : '/api'; 