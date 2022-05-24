import axios from 'axios';

const API_KEY = '';

function getCurrentWeather(Location) {
    axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=${API_KEY}` 
    ); 
}