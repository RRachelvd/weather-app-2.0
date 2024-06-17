import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast weather-forecast" id="forecast">
      <div className="row">
        <div className="col">
          {" "}
          <div className="weather-forecast-day">Wed</div>
          <div className="weather-forecast-icon">
            <WeatherIcon code="50d" />
          </div>
          <div className="weather-forecast-temperature">
            <span className="weather-forecast-temperature-max">9°</span>
            <span className="weather-forecast-temperature-min">3°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
