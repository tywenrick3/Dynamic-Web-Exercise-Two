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
                Cloudiness: <strong>{cloudiness}</strong>
            </p>
            <p className="weatherInfo">
                Current Temp: <strong>{currentTemp}</strong>
            </p>
            <p className="weatherInfo">
                High Temp: <strong>{highTemp}</strong>
            </p>
            <p className="weatherInfo">
                Humidity: <strong>{humidity}</strong>
            </p>
            <p className="weatherInfo">
                Low Temp: <strong>{lowTemp}</strong>
            </p>
            <p className="weatherInfo">
                Weather Type: <strong>{weatherType}</strong>
            </p>
            <p className="weatherInfo">
                Wind Speed: <strong>{windSpeed}</strong>
            </p>
            </div>
        </section>
    );
}

export default WeatherCard;