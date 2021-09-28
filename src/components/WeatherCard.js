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
            <p>
                cloudiness: <strong>{cloudiness}</strong>
            </p>
            <p>
                currentTemp: <strong>{currentTemp}</strong>
            </p>
            <p>
                highTemp: <strong>{highTemp}</strong>
            </p>
            <p>
                humidity: <strong>{humidity}</strong>
            </p>
            <p>
                lowTemp: <strong>{lowTemp}</strong>
            </p>
            <p>
                WeatherType: <strong>{weatherType}</strong>
            </p>
            <p>
                windSpeed: <strong>{windSpeed}</strong>
            </p>
        </section>
    );
}

export default WeatherCard;