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
    };

    // getCurrentWeather('Atlanta').then((response) => {
    //     console.log('res: ', response);
    // })
};

onInputChange(e) {
    this.setState({
        location: e.target.value
    })
    // console.log(e.target.value);
}

onFormSubmit(e){
    e.preventDefault();

    getCurrentWeather(this.state.location).then((response) => {
        // console.log('farenheit temp: ', response.data.main.temp);
        this.setState({
            temp: response.data.main.temp
        });
    })
}

  render(){
    return (
      <div className="App">
      
          <SearchBar />
          <CurrentWeather />
      </div>
    );
  }
}

export default App;
