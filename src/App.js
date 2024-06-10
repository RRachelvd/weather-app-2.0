import "./App.css";
import WeatherApp from "./WeatherApp.js";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-container">
        <header>
          <form id="search-form">
            <input
              type="search"
              required
              placeholder="Search for a city..."
              className="search-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </header>
        <main>
          <WeatherApp />

          <div className="weather-forecast" id="forecast"></div>
          <div className="weather-forecast" id="forecast"></div>
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
              href="https://github.com/RRachelvd/weather-app-2.0"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {` `}
            and hosted on {` `}
            <a
              href="https://react-weather-app-by-rachel.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </div>
        </footer>
        <script></script>
      </div>
    </div>
  );
}
