import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather (props){
const[weatherData, setWeatherData]=useState({ready:false});
const[city, setCity]=useState(props.defaultCity);
function handleResponse(response){
    setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt*1000),
        description: response.data.weather[0].description,
        iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        wind: response.data.wind.speed,
        city: response.data.name
    });
}

function handleSubmit(event){
    event.preventDefault();
    search();
}
function search(){
    const apiKey=`4fce99a02cfc536e13a3dc6fb2622c7d`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}
function handleCityChange(event){
    setCity(event.target.value);
}

if (weatherData.ready){
    return(
        <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Enter a city..." 
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}
                    />
                </div>
                <div className="col-3">
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn-primary w-100" 
                   />
                </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
    );
} else{
    search();
    return "Loading...";
}
}
