import React from 'react';
import { Link } from 'react-router-dom';

function Results(props) {
    return ( 
        <div className="results-container">
            <Link to="/">Get weather from another city</Link>
            <ul>
                <li>
                    Current Temp: {props.weather.main.temp}
                </li>
            </ul>
        </div>
    );
}

export default Results;