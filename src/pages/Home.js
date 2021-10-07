import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import WeatherCard from '../components/WeatherCard';

const API_KEY = '3c31f3fe1b1bf0986490dfc5c2cb9af8';

//URL Search Params...
//google.com/?city=paris
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

function Home(){
    const [city, setCity] = useState();
    const [weatherData, setWeatherData] = useState();

    let query = useQuery();

    useEffect(() => {
        const cityValue = query.get("city");
        setCity(cityValue);
    }, [query]);

    useEffect(() => {
        if (city) {
        console.log(city)
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
            )
            .then(function (response) {
                //handle success
                setWeatherData(response.data);
            })
            .catch(function (error) {
                //handle error
                console.warn(error);
            });
        }
    }, [city]);
    

    const { 
        cloudiness, 
        currentTemp, 
        highTemp, 
        humidity, 
        lowTemp, 
        weatherType, 
        windSpeed,
    } = useMemo(() => {
        if (!weatherData) return {};
        return {
            cloudiness: weatherData.clouds.all,
            currentTemp: Math.round(weatherData.main.temp),
            highTemp: Math.round(weatherData.main.temp_max),
            humidity: weatherData.main.humidity,
            lowTemp: Math.round(weatherData.main.temp_min),
            weatherType: weatherData.weather[0].main,
            windSpeed: weatherData.wind.speed
        }; 
    }, [weatherData]);

    const currentDate = new Date();
    const todayIndex = currentDate.getDay();
    const monthIndex = currentDate.getMonth();
    const UTCDATE = currentDate.getUTCDate();

    return (
        <main className="App">
            <header>
                <nav className="Navigation">
                    <a href='/?city=Paris' className={city === 'Paris' && 'Active'}>Paris</a>
                    <a href='/?city=Tokyo' className={city === 'Tokyo' && 'Active'}>Tokyo</a>
                    <a href='/?city=Tel Aviv' className={city === 'Tel Aviv' && 'Active'}>Tel Aviv</a>
                    <a href='/?city=New York' className={city === 'New York' && 'Active'}>New York</a>
                </nav>
            </header>
            <h1 className="CityTitle">{city}</h1>
            <h2 className="Date">{daysOfWeek[todayIndex] + ' ' + monthsOfYear[monthIndex] + ' ' + UTCDATE}</h2>
            <WeatherCard 
                cloudiness={cloudiness}
                currentTemp={currentTemp}
                highTemp={highTemp}
                humidity={humidity}
                lowTemp={lowTemp}
                weatherType={weatherType}
                windSpeed={windSpeed}
            />
        </main>
    );
}

export default Home;

