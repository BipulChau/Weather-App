import { Fragment } from "react";
import "./weather.css"

const Weather = () => {
  return (
  <div className="weather">
    <span className = "condition">30 C</span>
    <img className= "logo" src="/logo/perfect-day.svg" alt="perfect-day logo"/>
    </div>);
};

export default Weather;
