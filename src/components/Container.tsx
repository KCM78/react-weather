import React, { useState, useEffect } from "react";
import ShowWeather from "./ShowWeather";
import WeatherForm from "./WeatherForm";
import getData from "../api/ApiService";

const apiKey = "8d2de98e089f1c28e1a22fc19a24ef04"; // this isn't a good idea

const Container: React.FunctionComponent = () => {
  const [res, setResult] = useState({
    temperature: "",
    city: "",
    country: "",
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
          setResult({
            temperature: result.main.temp,
            city: result.name,
            country: result.sys.country,
            humidity: result.main.humidity,
            description: result.weather[0].description,
          });
        }
      }
    };
    fetchData();
  }, [city, country]);

  const setValues = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(e.target[0].value);
    setCountry(e.target[1].value);
  };

  return (
    <>
      <WeatherForm setValues={setValues} />
      <ShowWeather {...res} />
    </>
  );
};

export default Container;
