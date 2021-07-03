import React, {useState} from 'react';
import Axios from "axios";
import City from "./components/City";
import WeatherInfo from "./components/Weather";

import './App.css';
import styled from 'styled-components';

export const WeatherIcons = {
  "01d": "/react-weather-app/icons/sunny.svg",
  "01n": "/react-weather-app/icons/night.svg",
  "02d": "/react-weather-app/icons/day.svg",
  "02n": "/react-weather-app/icons/cloudy-night.svg",
  "03d": "/react-weather-app/icons/cloudy.svg",
  "03n": "/react-weather-app/icons/cloudy.svg",
  "04d": "/react-weather-app/icons/perfect-day.svg",
  "04n": "/react-weather-app/icons/cloudy-night.svg",
  "09d": "/react-weather-app/icons/rain.svg",
  "09n": "/react-weather-app/icons/rain-night.svg",
  "10d": "/react-weather-app/icons/rain.svg",
  "10n": "/react-weather-app/icons/rain-night.svg",
  "11d": "/react-weather-app/icons/storm.svg",
  "11n": "/react-weather-app/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: whitesmoke;
  font-family: 'Courier New', Courier, monospace;
`;

const AppLabel  = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.span`
  padding: 2px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {

  const [city, updateCity] = useState();
  const [weather, updateWeather ] = useState();
  const fetchWeather = async (e) =>{
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1bcd5b8dfd532def3404e4eb460afb43`,
    );
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherInfo weather={weather} city={city} />
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
