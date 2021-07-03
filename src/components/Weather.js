import React from "react";
import styled from "styled-components";
import { WeatherIcons } from "../App";

export const WeatherInfoIcons  = {
    sunset : "/react-weather-app/public/icons/temp.svg",
    sunrise : "/react-weather-app/public/icons.temp.svg",
    humidity : "/react-weather-app/public/icons/humidity.svg",
    wind : "/react-weather-app/public/icons/wind.svg",
    pressure : "/react-weather-app/public/icons/pressure.svg",
};

const Location = styled.span`
    margin: 15px auto;
    text-transform: capitalize;
    font-size: 28px;
    font-weight: bold;
`;

const Condition = styled.span`
    margin: 20px auto;
    text-transform: capitalize;
    font-size: 14px;
    & span {
        font-size : 28px; 
    }
`;

const WeatherInfoLabel = styled.span`
    margin: 20px 25px 10px;
    text-transform: capitalize;
    text-align: start;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
`;

const WeatherIcon = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px auto;
`;

const WeatherContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 30px auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const WeatherInfoContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items : center;
    flex-wrap: wrap;
`;

const InfoContainer = styled.div`
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const InfoIcon = styled.img`
    width: 40px;
    height: 40px;
`;

const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size : 14px;
    margin: 15px;
    & span {
        font-size: 12px;
        text-transform: capitalize;
    }
`;

const WeatherInfo = (props) =>{
    const{ name, value } = props;
    return (
        <InfoContainer>
            <InfoIcon src =  {WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};

const Weather = (props) => {
    const {weather}  = props;
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (tiemStamp) =>{
        return `${new Date(tiemStamp * 1000).getHours} : ${new Date(tiemStamp * 1000).getMinutes}`
    }

    return (
        <>
            <WeatherContainer>
                <Condition>
                    <span>
                        {`${Math.floor(weather?.main?.temp - 273)}°C`}
                        {`  |  ${weather?.weather[0].description}`}
                    </span>
                </Condition>
                <WeatherIcon src = {WeatherIcons[weather?.weather[0].icon]} />
            </WeatherContainer>
        
            <Location>
                {`${weather?.name}, ${weather?.sys?.country}`}
            </Location>
            <WeatherInfoLabel> Weather Information </WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfo  name={isDay?"sunset":"sunrise"} value = {`${getTime(weather?.sys[isDay?"sunset":"sunrise"])}`}/>
                <WeatherInfo  name={"humidity"} value = {weather.main.humidity}/>
                <WeatherInfo  name={"wind"} value = {weather.main.wind}/>
                <WeatherInfo  name={"pressure"} value = {weather.main.pressure}/>    
            </WeatherInfoContainer>

        </>
    )
}

export default Weather;