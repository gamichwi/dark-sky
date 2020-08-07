import React, { useEffect, useState } from "react";
import "./App.css";
import Current from "./Components/Current/Current";
import Daily from "./Components/Daily/Daily";

const App = () => {
  const [weather, setWeather] = useState([]);
  const [current, setCurrent] = useState([]);
  const [icon, setIcon] = useState([]);
  const [description, setDescription] = useState([]);
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    const lat = "-37.8169479";
    const long = "145.1814905";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setWeather(data);
    setCurrent(data.current);
    setIcon(data.current.weather[0].icon)
    setDaily(data.daily);
    setDescription(data.current.weather[0].description)
    console.log("data", data);
    console.log('current',data.current)
  };

  return (
    <div className="App">
      <h1>{weather.timezone}</h1>
      <Current feelsLike={current.feels_like} 
      weatherIcon={icon}
      description={description}
       />
    </div>
  );
};

export default App;
