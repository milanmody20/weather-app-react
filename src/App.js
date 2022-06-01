import SearchBar from  './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import { getCurrentWeather } from './api/open-weather-api';

import './App.css';
import React from 'react';

class App extends React.Component() {
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
};

onInputChange(e) {
    this.setState({
        location: e.target.value
    });
    // console.log(e.target.value);
}

onFormSubmit(){
    getCurrentWeather(this.state.location).then((response) => {
        // console.log('farenheit temp: ', response.data.main.temp);
        this.setState({
            temp: response.data.main.temp
        });
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
      </div>
    );
  }
}

export default App;
