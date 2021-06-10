import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather (props){
const[weatherData, setWeatherData]=useState({ready:false});
function handleResponse(response){
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt*1000),
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
        wind: response.data.wind.speed,
        city: response.data.name
    });
}
if (weatherData.ready){
    return(
        <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input 
                    type="search" 
                    placeholder="Enter a city..." 
                    className="form-control"
                    autoFocus="on"
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
        </div>
    );
} else{
    const apiKey=`4fce99a02cfc536e13a3dc6fb2622c7d`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}
