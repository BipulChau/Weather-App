
import"./city.css"



const City = (props) => {
  const{city_name, search_weather} = props

  return <div className="city">
    <img className= "logo" src="/logo/perfect-day.svg" alt="perfect-day logo"/>
    <span className="choose_city">Check Weather</span>
    <form className ="search_city"onSubmit={(e) => e.preventDefault()}>
      <input placeholder="City" onChange={city_name}></input>
      <button className="search_button" onClick={search_weather}>Search</button>
    </form>
    </div>;
};

export default City;
