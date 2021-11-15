import "./weatherinfo.css";
import WeatherInfoItem from "./WeatherInfoItem";


const WeatherInfoItems = (props) => {
  return (
    <div className="weather_details">
      <WeatherInfoItem/>   
      <WeatherInfoItem/>   
      <WeatherInfoItem/>   
      <WeatherInfoItem/>   
    </div>
  )
}

export default WeatherInfoItems