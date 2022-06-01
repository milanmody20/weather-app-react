import React from 'react';

class CurrentWeather extends React.Component {
    render() {
        const url = `http://openweathermap.org/img/wn/${this.props.icon}`


        return (
            <div className= "current_weather">
                <div className= "current_weather_temp">
                    <p>{this.props.currentTemperature} </p>
                </div>
                <div className= "current_weather_description">
                    <p>{this.props.description}</p>
                </div>
                <div className= "current_weather_image" src={url} alt={this.props.description}>
    
                </div>
                <div className= "current_weather_feels_like">
                    <p>{this.props.feelsLike}</p>
                </div>
            </div>
        )
    }
}

export default CurrentWeather;