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
        <section 
            className="WeatherCard" 
            style={{
            backgroundColor: `rgba(150, 150, 150, ${cloudiness/100})`,
            }}>
            <div className="MainInfo">
                <div className='WeatherImageWrapper'>
                    <WeatherImage weatherType={weatherType} />
                </div>
                <p className="CurrentTemp">{currentTemp}°</p>
                <div className='underImage'>
                    <p className="weatherType"><strong>{weatherType}</strong></p>
                    <div className='highandlow'>
                        <p>H: <strong>{highTemp}°</strong></p>
                        <p>L: <strong>{lowTemp}°</strong></p>
                    </div>
                </div>

            </div>
            <div className="Details">
                <p className="weatherInfo">
                    Cloudiness: <strong>{cloudiness}%</strong>
                </p>
                <p className="weatherInfo">
                    Humidity: <strong>{humidity}%</strong>
                </p>
                <p className="weatherInfo">
                    Wind Speed: <strong>{windSpeed} mph</strong>
                </p>
            </div>
        </section>
    );
}

export default WeatherCard;