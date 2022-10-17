import React, { useState, useEffect } from 'react';
import { ShowWeather } from './components/ShowWeather';
import './App.css';
import { WeatherForm } from './components/WeatherForm';
import { getData } from './api/ApiService';

const apiKey = '8d2de98e089f1c28e1a22fc19a24ef04';

export const App: React.FunctionComponent = () => {

  const [res, setResult] = useState({
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
  });

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData(city, country, apiKey);
      if (res !== undefined) {
        setResult({
          temperature: res.main.temp,
          city: res.name,
          country: res.sys.country,
          humidity: res.main.humidity,
          description: res.weather[0].description,
        });
      }
    };
    fetchData();
  }, [city, country]);

  const setValues = async (e: React.FormEvent<HTMLFormElement>) => {
    setCity(e.target[0].value);
    setCountry(e.target[1].value);
    e.preventDefault();
  };

  return (
    <div id="main-container">
      <h1>Simple React Weather App</h1>
      <WeatherForm setValues={setValues} />
      <ShowWeather {...res} />
    </div>
  );
};
