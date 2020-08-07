import React from 'react';
import "./Current.css";

const Current = ({feelsLike, weatherIcon, description}) => {

    return (
        <div className="current">
            <h2>Currently feels like {feelsLike}°C</h2>
            <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather icon"/>
            <h2 className="current-description"> {description}</h2>
        </div>
    )
}   

export default Current;