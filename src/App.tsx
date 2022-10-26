import React, { useState, useEffect } from "react";
import ShowWeather from "./components/ShowWeather/ShowWeather";
import WeatherForm from "./components/WeatherForm/WeatherForm";
import getData from "./api/ApiService";
import { WeatherFormElement, WeatherProps } from "./components/types";
import "./App.css";

const apiKey = "8d2de98e089f1c28e1a22fc19a24ef04"; // this isn't a good idea

type WeatherData = WeatherProps;

const App: React.FC = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    city: "",
    country: "",
    temperature: "",
    humidity: "",
    description: "",
  });
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (city !== "" && country !== "") {
        const result = await getData(city, country, apiKey);
        if (result !== undefined) {
          setWeatherData({
            temperature: result.main.temp.toString(),
            city: result.name,
            country: result.sys.country,
            humidity: result.main.humidity.toString(),
            description: result.weather[0].description,
          });
        }
      }
    };
    fetchData();
  }, [city, country]);

  const handleSubmit = async (
    event: React.FormEvent<WeatherFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setCity(event.currentTarget.elements.city.value);
    setCountry(event.currentTarget.elements.country.value);
  };

  return (
    <div id="main-container">
      <h1>Simple React Weather App</h1>
      <WeatherForm handleSubmit={handleSubmit} />
      <ShowWeather {...weatherData} />
    </div>
  );
};

export default App;
