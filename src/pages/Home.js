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
        axios
            .get(
                `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
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
        //TODO: Make temp F or C instead of Kelvin
        return {
            cloudiness: weatherData.clouds.all,
            currentTemp: weatherData.main.temp,
            highTemp: weatherData.main.temp_max,
            humidity: weatherData.main.humidity,
            lowTemp: weatherData.main.temp_min,
            weatherType: weatherData.weather[0].main,
            windSpeed: weatherData.wind.speed
        }; 
    }, [weatherData]);

    return (
        <main className="App">
            <header className="links">
                <p>
                    <a href='/?=paris'>Paris</a>
                </p>
                <p>
                    <a href='/?=tokyo'>Tokyo</a>
                </p>
                <p>
                    <a href='/?=NewYork'>New York</a>
                </p>
                <p>
                    <a href='/?=SanFrancisco'>San Francsico</a>
                </p>
            </header>
            <h1>{city}</h1>
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
