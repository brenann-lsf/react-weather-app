import React, { useState } from "react";
import "./WeatherForecast.css";
import Axios from "axios";
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
        let apiUrl=`https://api.openweathermap.org/data/2.5/oncall?lat=${latitude}&long=${longitude}&appid=${apiKey}&units=metric`;
    
        Axios.get(apiUrl).then(handleResponse);

        return null;
    }
}