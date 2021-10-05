import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSun, faSnowflake, faCloudRain, faBolt } from '@fortawesome/free-solid-svg-icons'

function WeatherImage({ weatherType }){
    switch(weatherType){
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud} />
        case 'Clear':
            return <FontAwesomeIcon icon={faSun} />
        case 'Rain':
            return <FontAwesomeIcon icon={faCloudRain} />
        case 'Thunderstorms':
            return <FontAwesomeIcon icon={faBolt} />
        case 'Snow':
            return <FontAwesomeIcon icon={faSnowflake} />
        default:
            return <FontAwesomeIcon icon={faBolt} />
    }
}

export default WeatherImage;