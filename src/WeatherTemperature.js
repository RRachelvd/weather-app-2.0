import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="weather-app-temperature">{props.celsius}</span>
        <span className="weather-app-unit">°C | °F</span>|
      </span>
    );
  } else {
    return "F";
  }
}
