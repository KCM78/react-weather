import React, { useState, useEffect } from "react";
import ShowWeather from "./components/ShowWeather/ShowWeather";
import WeatherForm from "./components/WeatherForm/WeatherForm";
import ShowError from "./components/ShowError/ShowError";
import getData from "./services/ApiService";
import {
  WeatherFormElement,
  WeatherProps,
} from "./components/WeatherForm/types";
import { ErrorType } from "./services/types";
import initialWeatherDataState from "./defaults/initialState";
import "./App.css";

const apiKey = "8d2de98e089f1c28e1a22fc19a24ef04"; // this isn't a good idea
// const apiKey = "8d2de98e089f1c28e1a22fc19a24ef03";

type WeatherData = WeatherProps & ErrorType;

const App: React.FC = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<WeatherData>(
    initialWeatherDataState
  );
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (city !== "" && country !== "") {
        setWeatherData({ ...(await getData(city, country, apiKey)) });
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
      {!weatherData.errorFlag ? (
        <ShowWeather {...weatherData} />
      ) : (
        <ShowError error={weatherData.errorMessage} />
      )}
    </div>
  );
};

export default App;
