import { Fragment } from "react";

import "./weather.css";
import WeatherInfoItems from "./WeatherInfoItems";

const Weather = (props) => {
  const { weather } = props;
  return (
    <Fragment>
      <div className="weather">
        <span>
          <span className="condition">
            {" "}
            {`${Math.floor(weather.main.temp - 273.15)}\u00b0 C`}
          </span>
          <span className="cloudy">| {weather.weather[0].description}</span>
        </span>
        <img
          className="logo"
          src="/logo/perfect-day.svg"
          alt="perfect-day logo"
        />
      </div>
      <span className="location">{`${weather.name}, ${weather.sys.country}`}</span>
      <span className="weather_info">Weather Info</span>
      <WeatherInfoItems weather={weather} />
    </Fragment>
  );
};

export default Weather;
