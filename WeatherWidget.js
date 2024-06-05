import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import './WeatherWidget.css';

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Kyiv&units=metric&appid=fbbbf25010d6465442f431893bce9221');
                const data = await response.json();
                if (response.ok) {
                    setWeatherData(data.list.slice(0, 5)); // Беремо лише 5 днів
                } else {
                    setError(data.message);
                }
            } catch (error) {
                setError('Не вдалося завантажити дані.');
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
    }, []);

    return (
        <div className="weather-widget">
            {loading && <p>Завантаження...</p>}
            {error && <p className="error">{error}</p>}
            <div className="weather-cards">
                {weatherData.map((weather, index) => (
                    <WeatherCard key={index} weather={weather} />
                ))}
            </div>
        </div>
    );
};

export default WeatherWidget;
