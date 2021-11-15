import "./weatherinfo.css";

const WeatherInfoItem = (props) => {
  return (
    <div className="weather_infoItem">
      <img
        className="logo_info"
        src="/logo/temp.svg"
        alt="perfect-day logo"
      /> 
      <span>18:00 <br/>Sunrise</span>    
    </div>
  )
}

export default WeatherInfoItem