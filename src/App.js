import React, { useEffect, useState } from "react";
import "./App.css";
import Current from "./Components/Current/Current";
import Daily from './Components/Daily/Daily';

const App = () => {

  const [weather, setWeather] = useState([]);
  const [currently, setCurrently] = useState([]);
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    getWeather();
  },[]);

  const getWeather = async () => {
    const lat = "-37.8169479";
    const long = "145.1814905";

    const response = await fetch(
      `https://dark-sky.p.rapidapi.com/${lat},${long}?lang=en&units=auto`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "dark-sky.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }
    );
    const data = await response.json();
    setWeather(data);
    setCurrently(data.currently);
    setDaily(data.daily);
    console.log('data',data);
  };

  return (
    <div className="App">
      <h1>{weather.timezone}</h1>
      <Current
        apparentTemp={currently.apparentTemperature}
        icon={currently.icon}
        currentSummary={currently.summary}
      />
      <Daily dailySummary={daily.summary} />
    </div>
  );
};

export default App;
