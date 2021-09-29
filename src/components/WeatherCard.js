import React from 'react';

function WeatherCard({
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed
}) {
    return (
        <section className="WeatherCard">
            <div className="CurrentTemperatureWrapper">
                <h2 className="Subheader">Current Temperature</h2>
                <p className="CurrentTemperature">{currentTemp}</p>
            </div>
            <div className="weatherInfoWrapper">
            <p className="weatherInfo">
                cloudiness: <strong>{cloudiness}</strong>
            </p>
            <p className="weatherInfo">
                currentTemp: <strong>{currentTemp}</strong>
            </p>
            <p className="weatherInfo">
                highTemp: <strong>{highTemp}</strong>
            </p>
            <p className="weatherInfo">
                humidity: <strong>{humidity}</strong>
            </p>
            <p className="weatherInfo">
                lowTemp: <strong>{lowTemp}</strong>
            </p>
            <p className="weatherInfo">
                WeatherType: <strong>{weatherType}</strong>
            </p>
            <p className="weatherInfo">
                windSpeed: <strong>{windSpeed}</strong>
            </p>
            </div>
        </section>
    );
}

export default WeatherCard;