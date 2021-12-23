import axios from 'axios';

const apiKey = String(process.env.REACT_APP_API_KEY);

export const api = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': apiKey,
  }
});