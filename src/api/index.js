import axios from 'axios';
import { BASE_URL } from '../config/api';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'}
});

/* export const setToken = token => {
    instance.defaults.headers.common['Authorization'] = token;
}; */

export const getHouses = () => {
    const url = '/casas';
    return instance.get(url);
};

export const getHouseCharacters = (houseID) => {
    const url = `/personajes?casa=${houseID}`;
    return instance.get(url);
};

export const postHouseCharacter = data => {
    const url = `/personajes`;
    return instance.post(url, data);
};
  
