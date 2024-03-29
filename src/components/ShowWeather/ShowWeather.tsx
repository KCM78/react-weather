import React from "react";
import { WeatherProps } from "../WeatherForm/types";

const ShowWeather: React.FC<WeatherProps> = ({
  city,
  country,
  temperature,
  humidity,
  description,
}: WeatherProps): JSX.Element => {
  return (
    <div id="weather-results">
      {city && country && (
        <p>
          Location: {city}, {country}
        </p>
      )}
      {temperature && <p>Temperature: {Math.round(Number(temperature))}C</p>}
      {humidity && <p>Humidity: {humidity}</p>}
      {description && <p>Conditions: {description}</p>}
    </div>
  );
};

export default ShowWeather;
