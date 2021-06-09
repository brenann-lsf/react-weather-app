import "./Weather.css";

export default function Weather (){
    return(
<div className="Weather">
    <form>
        <div className="row">
            <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control"/>
            </div>
            <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" autoFocus="on"/>
            </div>
        </div>
    </form>
    <h1>Toronto</h1>
    <ul>
        <li>Tuesday 09:33</li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
        <div className="clearfix">
            <img 
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png" 
            alt="Mostly Cloudy" 
            className="float-left"/>
        <div className="float-left">
            <span className="temperature">6</span>
            <span className="unit">°C</span>
        </div>
        </div>
        </div>
        
        <div className="col-6">
        <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km</li>
        </ul>
        </div>
    </div>
    </div>
    );
}