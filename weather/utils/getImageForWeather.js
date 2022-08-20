const images = {
    Clear: require('../assets/clear.png'),
    Mist: require('../assets/hail.png'),
    Clouds: require('../assets/heavy-cloud.png'),
    'Scattered Clouds': require('../assets/light-cloud.png'),
    Rain: require('../assets/heavy-rain.png'),
    Drizzle: require('../assets/light-rain.png'),
    'Light Rain': require('../assets/light-rain.png'),
    'Shower Rain': require('../assets/showers.png'),
    Sleet: require('../assets/sleet.png'),
    Snow: require('../assets/snow.png'),
    Thunderstorm: require('../assets/thunder.png'),
  };
  
  // returns image for weather situation
  export default weather => images[weather.weather] ? images[weather.weather] : images['Scattered Clouds'];