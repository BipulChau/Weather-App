import { Fragment } from "react";
import "./weather.css";
import WeatherInfoItems from "./WeatherInfoItems";

const Weather = () => {
  return (
    <Fragment>
    <div className="weather">
      <span>
      <span className="condition">30 C</span>
      <span className="cloudy">| Cloudy</span>
      </span>
      <img
        className="logo"
        src="/logo/perfect-day.svg"
        alt="perfect-day logo"
      />  
    </div>
    <span className="location">Toronto, CA</span>
    <span className="weather_info">Weather Info</span>
    <WeatherInfoItems/>
    </Fragment>
  );
};

export default Weather;
