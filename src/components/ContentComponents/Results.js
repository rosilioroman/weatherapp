import React from 'react';
import { Link } from 'react-router-dom';
import './Results.css';

function Results(props) {
    if(typeof props.weather.main === 'undefined') {
        return (
            <div className="results-container">
                <Link to="/" className="results-link">Get weather from another city</Link>
            </div>
        );
    }
   
    return ( 
        <div className="results-container">
            <h4>Location: {props.weather.name}, {props.weather.sys.country}</h4>
            <ul>
                <li>
                    Temperature: {Math.round(props.weather.main.temp)}&#8457; / {farenheitConverter(props.weather.main.temp)}&#8451;
                </li>
                <li>
                    Humidity: {props.weather.main.humidity}%
                </li>
                <li>
                    Clouds: {cloudStatus(props.weather.clouds.all)}
                </li>
            </ul>
            <Link to="/" className="results-link">Get weather from another city</Link>
        </div>
    );
}

function farenheitConverter(fTemp) {
    return Math.round((fTemp - 32) * 5 / 9);
}

function cloudStatus(cloudValue) {
    if(cloudValue >= 50) return "Cloudy";
    if(cloudValue < 50) return "Partly Cloudy";
    if(cloudValue <25) return "Mostly Clear";
    if(cloudValue <= 10) return "Clear";
}

export default Results;