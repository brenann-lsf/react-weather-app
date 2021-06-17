import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [loaded, setLoaded]=useState(false);
    let [forecast, setForecast]=useState(null);

    function handleResponse(response){
        setForecast (response.data.daily);
        setLoaded(true);
    }
    if (loaded){
        return(
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]}/>
                    </div>
                </div>
            </div>
        );
    }else{
        let apiKey="4fce99a02cfc536e13a3dc6fb2622c7d";
        let longitude= props.coordinates.lon;
        let latitude= props.coordinates.lat;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}