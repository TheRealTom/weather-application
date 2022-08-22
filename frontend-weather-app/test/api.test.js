import { fetchLocationWeather, _capitalizeWords, _convertKelvinToCelsius, _determineWeatherName } from './utils/api';


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