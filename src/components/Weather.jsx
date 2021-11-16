import { Fragment } from "react";
import City from "./City";
import "./weather.css";
import WeatherInfoItems from "./WeatherInfoItems";

const Weather = (props) => {
  const {city, weather} = props
  return (
    <Fragment>
    <div className="weather">
      <span>
      <span className="condition">30 C</span>
      <span className="cloudy">| {weather.weather[0].description}</span>
      </span>
      <img
        className="logo"
        src="/logo/perfect-day.svg"
        alt="perfect-day logo"
      />  
    </div>
    <span className="location">{city}</span>
    <span className="weather_info">Weather Info</span>
    <WeatherInfoItems/>
    </Fragment>
  );
};

export default Weather;
