import {SERVER_ADDRESS} from "@env"

const weatherOptions = ['Scattered Clouds', 'Sleet', 'Shower Rain', 'Light Rain']
const absoluteZeroKelvin = - 273.15

const mistStart = 701;
const mistEnd = 762;
const thunderLikeStart = 771;
const thunderLikeEnd = 799;


// Gets weather information of given location and
// returns its name, temperature in celsius and weather situation
export const fetchLocationWeather = async city => {
    // Request on server
    const response = await fetch (
        `${SERVER_ADDRESS}/locationWeather?city=${city}`
    )
    
    // Gets needed data
    const { weather, main, name } = await response.json();
    const { temp } = main;

    // Determines weather name
    const weatherDescription = capitalizeWords(weather[0].description);
    const weatherName = determineWeatherName(weather[0].id,  weather[0].main, weatherDescription);

    return {
        location: name,
        weather: weatherName,
        temperature: convertKelvinToCelsius(temp)
    };
}

// Some weather description are more precise then the weatherName
// This function returns weatherName or weatherDescription or special weather occation
function determineWeatherName(weatherId, weatherName, weatherDescription) {
    if (weatherOptions.includes(weatherDescription)) {
        return weatherDescription; 
    } else if (weatherId >= mistStart && weatherId <= mistEnd) {
        return 'Mist';
    } else if (weatherId >= thunderLikeStart && weatherId <= thunderLikeEnd) {
        return 'Thunderstorm';
    } else {
        return weatherName;
    }
}

// Capitalizes every word in string
function capitalizeWords(stringOfWords) {    
    let splitedString = stringOfWords.split(" ");

    for (let i = 0; i < splitedString.length; i++) {
        splitedString[i] = splitedString[i].charAt(0).toUpperCase() + splitedString[i].slice(1);
    }

    return splitedString.join(" ");
}

function convertKelvinToCelsius(temperature) {
    return temperature + absoluteZeroKelvin;
}