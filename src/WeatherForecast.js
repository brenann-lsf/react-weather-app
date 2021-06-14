import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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