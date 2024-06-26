import React, { useState, useEffect } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature.js";
import Forecast from "./Forecast.js";

export default function WeatherApp(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  useEffect(() => {
    setReady(false);
  }, [weather.city]);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function cityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2b6fdad0cbd018949c50c70f72250726";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      image: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
      userCity: city,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            required
            placeholder="Search for a city..."
            className="search-input"
            onChange={cityChange}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <div className="WeatherApp grid">
          <div className="weather-info-left">
            <h1>{weather.city}</h1>

            <p className="todays-weather">
              <span>
                <FormattedDate date={weather.date} />,
              </span>
              {` `}
              <span className="capitalize">{weather.description}</span>
              <br />
              Humidity:
              <span className="todays-weather-details">
                {` `}
                {weather.humidity}%
              </span>
              , Wind:
              <span className="todays-weather-details">
                {` `}
                {weather.wind} km/h
              </span>
            </p>
          </div>
          <WeatherTemperature
            celsius={weather.temperature}
            icon={weather.icon}
          />
        </div>
        <Forecast city={weather.userCity} />
      </div>
    );
  } else {
    search();
    return (
      <div>
        <form id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            required
            placeholder="Search for a city..."
            className="search-input"
            onChange={cityChange}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }
}
