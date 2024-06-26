import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function search() {
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let query = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast weather-forecast" id="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    search();

    return null;
  }
}
