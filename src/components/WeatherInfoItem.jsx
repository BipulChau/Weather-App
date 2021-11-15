import "./weatherinfo.css";

const weatherInfoLogos = {
  sunset: "/logo/temp.svg",
  sunrise: "/logo/temp.svg",
  humidity: "/logo/humidity.svg",
  wind: "/logo/wind.svg",
  pressure: "/logo/pressure.svg",
}

const WeatherInfoItem = (props) => {
  const {name, value} = props
  return (
    <div className="weather_infoItem">
      <img
        className="logo_info"
        src={weatherInfoLogos[name]}
        alt={name}
      /> 
      <span>{value}<br/>{name}</span>    
    </div>
  )
}

export default WeatherInfoItem