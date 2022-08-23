import { fetchLocationWeather, _capitalizeWords, _convertKelvinToCelsius, _determineWeatherName } from '../utils/api';


const lowerCaseWords = [
    "word",
    "lorem ipsum",
    "a a a a a a a a a a a a a a",
    "4g6rwgw6 sad46f4w6ef4w4gwr8gr ;lewf"
];

const upperCaseWords = [
    "Word",
    "Lorem Ipsum",
    "A A A A A A A A A A A A A A",
    "4g6rwgw6 Sad46f4w6ef4w4gwr8gr ;lewf"
];

const kelvinValues = [
    273.15,
    309.15,
    0,
    272.15
];

const celsiusValues = [
    0,
    36,
    -273.15,
    -1
];

const predefinedWeatherDescriptionNames = [
    'Scattered Clouds',
    'Sleet',
    'Shower Rain',
    'Light Rain'
];

const weatherIdsMist = {
    mistStart: 701,
    mistEnd: 770
};

const weatherIdsThunderstorm = {
    thunderstormStart: 771,
    thunderstormEnd: 799
};

const notMistWeather = [
    [1, "Rain", "Showers"],
    [799, "Thunderstorm", "Tornado"],
    [100, "Clouds", "Scattered Clouds"],
]

const returnWeatherName = [
    [1, "Rain", "very rain"],
    [950, "Clouds", "overcast"],
    [100, "Clear", "clear sky"],
]


describe("Test _capitalizeWords", () => {
    test("First letter of word to uppercase", () => {
        let result;

        for (let i = 0; i < lowerCaseWords.length; i++) {
            result = _capitalizeWords(lowerCaseWords[i]);
            expect(result).toBe(upperCaseWords[i]);
        }
    });
});


describe("Test _convertKelvinToCelsius", () => {
    test("Converts value from kelvin to celsius", () => {
        let result;

        for (let i = 0; i < kelvinValues.length; i++) {
            result = _convertKelvinToCelsius(kelvinValues[i]);
            expect(result).toBe(celsiusValues[i]);
        }
    });
});


describe("Test _determineWeatherName", () => {
    test("Get Mist", () => {
        let result;

        result = _determineWeatherName(weatherIdsMist.mistStart, "", "");
        expect(result).toBe("Mist");
        
        result = _determineWeatherName(weatherIdsMist.mistEnd, "", "");
        expect(result).toBe("Mist");
    });

    test("Get Thunderstorm", () => {
        let result;

        result = _determineWeatherName(weatherIdsThunderstorm.thunderstormStart, "", "");
        expect(result).toBe("Thunderstorm");
        
        result = _determineWeatherName(weatherIdsThunderstorm.thunderstormEnd, "", "");
        expect(result).toBe("Thunderstorm");
    });

    test("Get defined description weather name", () => {
        let result;

        for (let i = 0; i < predefinedWeatherDescriptionNames.length; i++) {
            result = _determineWeatherName(1, "", predefinedWeatherDescriptionNames[i]);
            expect(result).toBe(predefinedWeatherDescriptionNames[i]);
        }
    });

    test("Get weather main name", () => {
        let result;

        for (let i = 0; i < returnWeatherName.length; i++) {
            result = _determineWeatherName(returnWeatherName[i][0],returnWeatherName[i][1],returnWeatherName[i][2]);
            expect(result).toBe(returnWeatherName[i][1]);
        }
    });

    test("Don't get Mist", () => {
        let result;

        for (let i = 0; i < notMistWeather.length; i++) {
            result = _determineWeatherName(notMistWeather[i][0],notMistWeather[i][1],notMistWeather[i][2]);
            expect(result).not.toBe("Mist");
        }
    });
});