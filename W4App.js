
//npx create-react-app fetch-api-example
//cd fetch-api-example
//npm start

import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");

  const getWeather = () => {
    if (!city) {
      setError("City name is required!");
      return;
    }

    fetch(`https://wttr.in/${city}?format=3`)
      .then((res) => res.text())
      .then((data) => {
        setWeather(data);
        setError("");
      })
      .catch((err) => {
        setError("Failed to fetch weather");
        setWeather("");
      });
  };

  return (
    <div className="App">
      <h1> Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}
      {weather && <p className="weather">{weather}</p>}
    </div>
  );
}

export default App;
