import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return(
<div className="WeatherInfo">
    <h1>
    <i class="fas fa-map-marker-alt"></i>{" "}
    {props.data.city}
    </h1>
        <ul>
            <li><FormattedDate date={props.data.date}/></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
            <div className="clearfix">
                <div className="float-left">
                <WeatherIcon  code={props.data.icon} 
                alt={props.data.description}
                size ={80}
                color={"#fa9906"}
                />
                </div>
            <div className="float-left">
                <WeatherUnit celsius={props.data.temperature}/>
                
            </div>
            </div>
            </div>
            
            <div className="col-6">
            <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind}km/h</li>
            </ul>
            </div>
        </div>
        </div>   

    );
}