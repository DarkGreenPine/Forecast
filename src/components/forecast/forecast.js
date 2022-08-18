import React from "react";
import "./forecast.css";

const ForeCast = ({forecastData}) => {
    return (
        <>
            <h2>Hourly Forecast</h2>
            <hr/>
            <div className="hourly-forecast">
                <div className="hourly-item">
                    <h3>{forecastData.list[0].dt_txt} UTC</h3>
                    <h3>{forecastData.list[0].main.temp.toFixed()}°F</h3>
                </div>
                <div className="hourly-item">
                    <h3>{forecastData.list[1].dt_txt} UTC</h3>
                    <h3>{forecastData.list[1].main.temp.toFixed()}°F</h3>
                </div>
                <div className="hourly-item">
                    <h3>{forecastData.list[2].dt_txt} UTC</h3>
                    <h3>{forecastData.list[2].main.temp.toFixed()}°F</h3>
                </div>
            </div>
        </>
    )
}

export default ForeCast;