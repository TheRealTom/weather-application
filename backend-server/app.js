import fetch from "node-fetch";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());

const PORT = process.env.SERVER_PORT || 8000;


// default page
app.get('/', (req, res) => res.status(200).json(`Server is running`));

// Gets weather information about weather from given location
app.get('/locationWeather', async (req, res) => {
    // console.log(`REQUEST: /locationWeather with city location ${req.query.city}`);
    
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&APPID=${process.env.OPEN_WEATHER_MAPS_API_KEY}`
    ); 
    res.json(await response.json());
});

app.listen(process.env.SERVER_PORT);

export default app;
