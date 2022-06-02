import SearchBar from  './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import { getCurrentWeather, getForcast } from './api/open-weather-api';
import ForcastWeather from './components/ForcastWeather';

import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        location: "",
        temp: "",
        feelsLike: "",
        description: "",
        icon: "",
    };

    // getCurrentWeather('Atlanta').then((response) => {
    //     console.log('res: ', response);
    // })
}

onInputChange(e) {
    this.setState({
        location: e.target.value,
    });
    // console.log(e.target.value);
}

async onFormSubmit(){
    const weatherResponse = await getCurrentWeather(this.state.location);
        const lat = weatherResponse.data.cord.lat;
        const lon = weatherResponse.data.cord.lon;
        const forcastRespone = await getForcast(lat, lon);

        this.setState({
            temp: weatherResponse.data.main.temp,
            feelsLike: weatherResponse.data.main.feels_like,
            description: weatherResponse.data.weather[0].main,
            icon: weatherResponse.data.weather[0].icon,
            forcast: forcastRespone.data.hourly
        });
}

  render(){
    return (
      <div className="App">
          <SearchBar 
            location={this.state.location}
            inputChange={(e) => this.onInputChange(e)}
            formSubmitted={() => this.onFormSubmit()} 
          />
          <CurrentWeather 
            currentTemperature={this.state.temp}
            feelsLike={this.state.feelsLike}
            description={this.state.description}
            icon={this.state.icon}  
          />
          <ForcastWeather />
      </div>
    );
  }
}

export default App;
