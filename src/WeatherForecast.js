import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
    console.log(response.data); 
    }

    let apiKey=`4fce99a02cfc536e13a3dc6fb2622c7d`;
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/oncall?lat=${latitude}&long=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return(
<div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="WeatherForecastr-day">
                Thu
            </div>
            <img src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" alt="Mostly Cloudy"/>
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max"> 19°</span>
                <span className="WeatherForecast-temperature-min">10°</span>
            </div>            
        </div>
    </div>
</div>
    );
}