import "./weatherinfo.css";
import WeatherInfoItem from "./WeatherInfoItem";

const WeatherInfoItems = (props) => {
  return (
    <div className="weather_details">
      <WeatherInfoItem name="sunrise" value="" />
      <WeatherInfoItem name="humidity" value="" />
      <WeatherInfoItem name="wind" value="" />
      <WeatherInfoItem name="pressure" value="" />
    </div>
  );
};

export default WeatherInfoItems;
