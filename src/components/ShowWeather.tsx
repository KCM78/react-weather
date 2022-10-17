import React from "react";

interface IWeatherProps {
  city: string;
  country: string;
  description: string;
  humidity: string;
  temperature: string;
}

const ShowWeather: React.FC<IWeatherProps> = ({
  city,
  country,
  temperature,
  humidity,
  description,
}: IWeatherProps) => {
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
