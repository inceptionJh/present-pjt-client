import './Weather.css';

import React, { Component } from 'react';

export default class Weather extends Component {
  state = {
    // isLoaded: false,
    temperature: null,
    name: null,
    // weather: null,
    icon: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.getWeather(position.coords.latitude, position.coords.longitude);

        // var latitude = position.coords.latitude;
        // var longitude = position.coords.longitude;
        // console.log("latitude:", latitude, "longitude:", longitude);
      },
      err => {
        console.log(err);
      }
    );
  }

  getWeather = (lat, long) => {
    const API_KEY = 'c82c6c9ea608c03b953323d802166401';
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          name: data.name,
          temperature: Math.ceil(data.main.temp - 273),
          // weather: data.weather[0].main,
          icon: data.weather[0].icon
        });
      });
  };

  render() {
    return (
      <div className="weather">
        <div className="weather-top">
          <img
            className="weather-img"
            src={`http://openweathermap.org/img/w/${this.state.icon}.png`}
            alt="icon"
          />
          <div className="weather-temperature">
            <span>{this.state.temperature + ' ℃'}</span>
          </div>
        </div>

        <div className="weather-name">{this.state.name}</div>
        {/* <div>{this.state.weather}</div> */}
      </div>
    );
  }
}
