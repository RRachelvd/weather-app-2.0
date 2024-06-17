import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }

  function day() {
    let date = new Date(forecast.daily[0].time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function search() {
    let apiKey = "0c98c0be68f4tba31fe26f898obb603d";
    let query = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast weather-forecast" id="forecast">
        <div className="row">
          <div className="col">
            {" "}
            <div className="weather-forecast-day">{day()}</div>
            <div className="weather-forecast-icon">
              <WeatherIcon code={forecast.daily[0].condition.icon} size={55} />
            </div>
            <div className="weather-forecast-temperature">
              <span className="weather-forecast-temperature-max">
                {Math.round(forecast.daily[0].temperature.maximum)}°
              </span>
              <span className="weather-forecast-temperature-min">
                {Math.round(forecast.daily[0].temperature.minimum)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return null;
  }
}
