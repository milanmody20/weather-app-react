import React from 'react';

class CurrentWeather extends React.Component {
    render() {
        return (
            <div className= "current_weather">
                <div className= "current_weather_temp">
                    <p>{this.props.currentTemperature} </p>
                </div>
                <div className= "current_weather_description">
                    <p>Sunny</p>
                </div>
                <div className= "current_weather_image" url="">
    
                </div>
                <div className= "current_weather_feels_like">
                    <p>65 degrees</p>
                </div>
            </div>
        )
    }
}

export default CurrentWeather;