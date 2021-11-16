import "./weatherinfo.css";
import WeatherInfoItem from "./WeatherInfoItem";

const WeatherInfoItems = (props) => {
  const{weather} =props
  const isNight = weather?.weather[0].icon?.includes('n')
  return (
    <div className="weather_details">
      <WeatherInfoItem name={isNight?"sunrise":"sunset"} value={weather.sys[isNight?"sunrise":"sunset"]} />
      <WeatherInfoItem name="humidity" value={weather?.main?.humidity}/>
      <WeatherInfoItem name="wind" value={weather?.wind?.speed} />
      <WeatherInfoItem name="pressure" value={weather?.main?.pressure}/>
    </div>
  );
};

export default WeatherInfoItems;
