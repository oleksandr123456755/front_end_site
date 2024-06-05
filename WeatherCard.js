import React from 'react';
import './WeatherCard.css';


const WeatherCard = ({ weather }) => {
    const date = new Date(weather.dt * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Місяці починаються з 0
    const year = date.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;

    return (
        <div className="weather-card">
            <h3>{formattedDate}</h3>
            <p>Температура: {weather.main.temp}°C</p>
            <p>Опис: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;
