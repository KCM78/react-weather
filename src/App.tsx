import React, { useState, useEffect, useCallback } from "react";
import ShowWeather from "./components/ShowWeather";
import "./App.css";
import WeatherForm from "./components/WeatherForm";
import getData from "./api/ApiService";

const apiKey = "8d2de98e089f1c28e1a22fc19a24ef04";

const App: React.FunctionComponent = () => {
  const [res, setResult] = useState({
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
  });

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const fetchData = useCallback(async () => {
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
  }, [city, country]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const setValues = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(e.target[0].value);
    setCountry(e.target[1].value);
  };

  return (
    <div id="main-container">
      <h1>Simple React Weather App</h1>
      <WeatherForm setValues={setValues} />
      <ShowWeather {...res} />
    </div>
  );
};

export default App;
