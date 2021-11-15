import styled from "styled-components";
import City from "./components/City";
import Weather from "./components/Weather";
import Nav from "./components/Nav";
import "./components/App.css";

function App() {
  return (
    <div className="main">
      <Nav/>
      <City />
      <Weather/>
    </div>
  );
}

export default App;
