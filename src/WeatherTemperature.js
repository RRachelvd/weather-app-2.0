import React, { useState } from "react";

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
      <span className="WeatherTemperature">
        <span className="weather-app-temperature">{props.celsius}</span>
        <span className="weather-app-unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" onCLick={showFahrenheit}>
            °F
          </a>
        </span>
        |
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="weather-app-temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="weather-app-unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" onCLick={showFahrenheit}>
            °F
          </a>
        </span>
        |
      </span>
    );
  }
}
