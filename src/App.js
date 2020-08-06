import React from "react";
import "./App.css";

const App = () => {
  const lat = "-37.8169479";
  const long = "145.1814905";

  fetch(`https://dark-sky.p.rapidapi.com/${lat},${long}?lang=en&units=auto`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "dark-sky.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    }
  })
  .then(response => {
    if(response.ok) {
      return response.json()
    } else console.log('Not Succesful')
  })
  .then(data => console.log(data))

  return <h1>Hello, world.</h1>;
};

export default App;
