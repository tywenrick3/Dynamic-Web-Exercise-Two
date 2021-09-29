import React, { useMemo } from 'react';
import WeatherCard from '../components/WeatherCard';

function Home(){
    const { cloudiness, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed } = useMemo(() => {
        //This is where we process data
        return ({
            cloudiness: 100,
            currentTemp: `76`,
            highTemp: `80`,
            humidity: 100,
            lowTemp: `80`,
            weatherType: `Cloudy`,
            windSpeed: `10mph`
        })
    }, [])

    return (
        <main className="App">
            <header className="appTitle">Live Weather</header>
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
