import React from 'react';
import WeatherImage from './WeatherImage';

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
                <div className='WeatherImageWrapper'>
                    <WeatherImage weatherType={weatherType} />
                </div>
                <p className="CurrentTemp">{currentTemp}°</p>
                <p className="weatherInfo"><strong>{weatherType}</strong></p>
            </div>
            <div className="weatherInfoWrapper">
                <p className="weatherInfo">
                    Cloudiness: <strong>{cloudiness}%</strong>
                </p>
                <p className="weatherInfo">
                    Current Temp: <strong>{currentTemp}°</strong>
                </p>
                <p className="weatherInfo">
                    High: <strong>{highTemp}°</strong>
                </p>
                <p className="weatherInfo">
                    Humidity: <strong>{humidity}%</strong>
                </p>
                <p className="weatherInfo">
                    Low: <strong>{lowTemp}°</strong>
                </p>
                <p className="weatherInfo">
                    Wind Speed: <strong>{windSpeed} mph</strong>
                </p>
            </div>
        </section>
    );
}

export default WeatherCard;