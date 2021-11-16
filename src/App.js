//import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import City from "./components/City";
import Weather from "./components/Weather";
import Nav from "./components/Nav";
import "./components/App.css";

function App() {
  const [city, setCity]=useState("")
  const [weather, setWeather]=useState("")
  const API_KEY=process.env.REACT_APP_API_KEY
  console.log(process.env.REACT_APP_API_KEY)

  const city_name = e => {
    setCity(e.target.value)
  }

  const search_weather = async() => {
    console.log("City :",city)
    console.log("API KEY :",API_KEY)
    const response= await axios.get(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    console.log(response.data.weather[0].description  ) //test
    setWeather(response.data)
  }
  return (
    <div className="main">
      <Nav/>
      <City city_name={city_name} search_weather={search_weather} weather={weather}/>
      {weather && <Weather weather={weather} city={city}/>}
    </div>
  );
}

export default App;
