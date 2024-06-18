import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="weather-forecast-day">{day()}</div>
      <div className="weather-forecast-icon">
        <WeatherIcon code={props.data.condition.icon} size={55} />
      </div>
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="weather-forecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
