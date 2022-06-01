import React from 'react';
import { getCurrentWeather } from '../api/open-weather-api';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    onInputChange(e){
        this.props.inputChange(e);
    }
    
    onFormSubmit(e){
        e.preventDefault();
    }

    render(){
        const location = this.state.location;
        const temp = this.state.temp;

        return(
            <div>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <button type = "submit">Search</button>
                    <input id="search" name="search" value={location} onChange={(e) => this.onInputChange(e)}></input>
                </form>
            </div>
        )
    }
}

export default SearchBar;