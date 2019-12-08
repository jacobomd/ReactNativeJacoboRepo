import axios from 'axios';
import { BASE_URL } from '../config/api';
import qs from 'qs';

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

export const getHouseCharacters = params => {
    const url = `/personajes?${qs.stringify(params, {skipNulls: true})}`;
    return instance.get(url);
  };
  

export const postHouseCharacter = data => {
    const url = `/personajes`;
    return instance.post(url, data);
};
  
