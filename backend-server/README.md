# Backend server for weather app

Finds location weather information via Open Weather Map API.

## Setup

1. Clone repository
2. To install all packages, run command:
 
```$ npm install```

3. Get yourself an API key from [Open Weather Map](https://openweathermap.org/) and put it in .env
4. Set `SERVER_PORT` on port you want the server to listen on and API key - `OPEN_WEATHER_MAPS_API_KEY`

```js
# .env file
# eg.
OPEN_WEATHER_MAPS_API_KEY=0123456789
SERVER_PORT=8080
```

## Usage

- type in console:

```$ npm run start```

## Technology

- [Express JS](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Node-Fetch](https://www.npmjs.com/package/node-fetch)
- [NPM](https://www.npmjs.com/)