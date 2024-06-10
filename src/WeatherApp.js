import React from "react";

export default function WeatherApp() {
  let weatherData = {
    city: "Leeuwarden",
    date: "Tuesday 12:04,",
    description: "Overcast clouds",
    humidity: 66,
    wind: 4.7,
    temperature: 18,
  };

  return (
    <div className="WeatherApp">
      <div className="weather-info-left">
        <h1>{weatherData.city}</h1>

        <p className="todays-weather">
          <span>{weatherData.date}</span>
          {` `}
          <span>{weatherData.description}</span>
          <br />
          Humidity:
          <span className="todays-weather-details">
            {` `}
            {weatherData.humidity}%
          </span>
          , Wind:
          <span className="todays-weather-details">
            {` `}
            {weatherData.wind} km/h
          </span>
        </p>
      </div>

      <div className="weather-app-temperature-container">
        <div className="weather-app-icon">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="overcast clouds"
          />
        </div>
        <span className="weather-app-temperature">
          {weatherData.temperature}
        </span>
        <span className="weather-app-unit">°C</span>
      </div>
    </div>
  );
}
