import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="weather-app-temperature-container">
        <div className="weather-app-icon">
          <WeatherIcon code={props.icon} size={75} />
        </div>
        <span className="weather-app-temperature">{props.celsius}</span>
        <span className="weather-app-unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          /{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-app-temperature-container">
        <div className="weather-app-icon">
          <WeatherIcon code={props.icon} />
        </div>
        <span className="weather-app-temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="weather-app-unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          /{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
