import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit = "fahrenheit";
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="weather-app-temperature">{props.celsius}</span>
        <span className="weather-app-unit">
          °C |{" "}
          <a href="/" onCLick={convertToFahrenheit}>
            °F
          </a>
        </span>
        |
      </span>
    );
  } else {
    return "F";
  }
}
