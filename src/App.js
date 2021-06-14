
import './App.css';
import Weather from "./Weather.js";
import WeatherForecast from "./WeatherForecast.js";

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <Weather defaultCity="Toronto"/>
      <WeatherForecast />
    </div>
    <footer>
      This project was coded by Brenann Francis and is{" "}
      <a href="https://github.com/brenann-lsf/react-weather-app" rel="noreferrer" target="_blank">
        open-sourced on GitHub
      </a>
    </footer>
    </div>
  );
}

