import"./city.css"

const search_weather = (e) => {
  e.preventDefault()
}

const City = (props) => {
  return <div className="city">
    <img className= "logo" src="/logo/perfect-day.svg" alt="perfect-day logo"/>
    <span className="choose_city">Check Weather of any city</span>
    <form className ="search_city">
      <input placeholder="City"></input>
      <button className="search_button" onSubmit={search_weather}>Search</button>
    </form>
    </div>;
};

export default City;
