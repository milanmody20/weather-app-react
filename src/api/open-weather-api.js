import axios from 'axios';

function getCurrentWeather(Location) {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=imperial&appid=${process.env.REACT_APP_API_KEY}` 
    ); 
}

export {
    getCurrentWeather
}