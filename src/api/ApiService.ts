import { CurrentWeatherDataResponse } from "./WeatherDataResponse";

const getData = async (
  city: string,
  country: string,
  apiKey: string
): Promise<CurrentWeatherDataResponse> => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
  ).then((data) => data.json());

  return response;
};

export default getData;
