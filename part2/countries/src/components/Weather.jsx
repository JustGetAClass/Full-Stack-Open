/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import getWeather from "../services/fetchWeather";

const Weather = ({ name }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getWeather(name).then((response) => {
      setWeather(response);
    });
  }, []);

  if (!weather) {
    return null;
  }

  return (
    <div>
      <h1>Weather in {name}</h1>
      <p>tempreture {weather.main.feels_like}Celcius</p>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
