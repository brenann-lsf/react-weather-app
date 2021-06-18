import React from "react";

export default function WeatherUnit(props){
        return(
            <div className="WeatherUnit">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">°C 
                </span>
            </div>
        );
    }