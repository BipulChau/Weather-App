import "./weatherinfo.css";
import WeatherInfoItem from "./WeatherInfoItem";

const WeatherInfoItems = (props) => {
  const { weather } = props;
  const isNight = weather?.weather[0].icon?.includes("n");
  
//   const timeStampToTime = (unixTimestamp) => {
//    const time = moment(unixTimestamp).format("DD-MM-YYYY h:mm:ss")
//     return time
//   };
// console.log(timeStampToTime(weather.sys[isNight?"sunrise":"sunset"]))

  return (
    <div className="weather_details">
      <WeatherInfoItem
        name={isNight ? "sunrise" : "sunset"}
        value={weather.sys[isNight ? "sunrise" : "sunset"]}
      />
      <WeatherInfoItem name="humidity" value={weather?.main?.humidity} />
      <WeatherInfoItem name="wind" value={weather?.wind?.speed} />
      <WeatherInfoItem name="pressure" value={weather?.main?.pressure} />
    </div>
  );
};

export default WeatherInfoItems;
