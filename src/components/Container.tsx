import React, { useState, useEffect } from "react";
import ShowWeather from "./ShowWeather";
import WeatherForm from "./WeatherForm";
import getData from "../api/ApiService";
import { WeatherFormElement, WeatherProps } from "./types";

const apiKey = "8d2de98e089f1c28e1a22fc19a24ef04"; // this isn't a good idea

type WeatherData = WeatherProps;

const Container: React.FC = () => {
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

  const handleSubmit = async (event: React.FormEvent<WeatherFormElement>) => {
    event.preventDefault();
    setCity(event.currentTarget.elements.city.value);
    setCountry(event.currentTarget.elements.country.value);
  };

  return (
    <>
      <WeatherForm handleSubmit={handleSubmit} />
      <ShowWeather {...weatherData} />
    </>
  );
};

export default Container;
