import axios from 'axios';

const API_KEY = '54a91ea6bd7fb14434656a241ce121d1';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
     
    return {
        type: FETCH_WEATHER,
        payload: request
    };
} 

