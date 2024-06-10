import "./App.css";
import Form from "./Form.js";
import Forecast from "./Forecast.js";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="weather-app-container">
      <header>
        <Form />
      </header>
      <main>
        <WeatherApp />
        <Forecast />
        <div className="weather-forecast" id="forecast"></div>
      </main>

      <footer>
        <div>
          Coded by {` `}
          <a
            href="https://github.com/RRachelvd"
            target="_blank"
            rel="noreferrer"
          >
            Rachèl van Dijkhorst
          </a>
          , open-sourced on {` `}
          <a
            href="https://github.com/RRachelvd/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {` `}
          and hosted on {` `}
          <a
            href="https://willitrainornot.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </div>
      </footer>
      <script></script>
    </div>
  );
}
