import React from 'react';
import { getCurrentWeather } from '../api/open-weather-api';

class SearchBar extends React.Component {
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
            console.log('farenheit temp: ', response.data.main.temp);
        })
    }

    render(){
        const location = this.state.location;
        const temp = this.state.temp;

        return(
            <div>
                <div>
                    <p>
                        {temp}
                    </p>
                </div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <button type = "submit">Search</button>
                    <input id="search" name="search" value={location} onChange={(e) => this.onInputChange(e)}></input>
                </form>
            </div>
        )
    }
}

export default SearchBar;