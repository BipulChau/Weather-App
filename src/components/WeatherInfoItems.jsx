import "./weatherinfo.css";
import WeatherInfoItem from "./WeatherInfoItem";

const WeatherInfoItems = (props) => {
  const { weather } = props;
  const isNight = weather?.weather[0].icon?.includes("n");

  const timeStampToTime = (unixTimestamp) => {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(unixTimestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    return formattedTime;
  };
  console.log(timeStampToTime(weather.sys[isNight ? "sunrise" : "sunset"]));

  return (
    <div className="weather_details">
      <WeatherInfoItem
        name={isNight ? "sunrise" : "sunset"}
        value={timeStampToTime(weather.sys[isNight ? "sunrise" : "sunset"])}
      />
      <WeatherInfoItem name="humidity" value={weather?.main?.humidity} />
      <WeatherInfoItem name="wind" value={weather?.wind?.speed} />
      <WeatherInfoItem name="pressure" value={weather?.main?.pressure} />
    </div>
  );
};

export default WeatherInfoItems;
