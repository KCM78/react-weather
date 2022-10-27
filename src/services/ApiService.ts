import { WeatherProps } from "../components/WeatherForm/types";
import { ErrorType, CurrentWeatherDataResponse } from "./types";
import initialWeatherDataState from "../defaults/initialState";

type WeatherResponse = WeatherProps & ErrorType;

const parseResponse = (
  response: CurrentWeatherDataResponse | null,
  errorMessage: string
): WeatherResponse => {
  if (!response) {
    return {
      ...initialWeatherDataState,
      errorFlag: true,
      errorMessage,
    };
  }
  return {
    temperature: response.main?.temp.toString(),
    city: response?.name,
    country: response.sys?.country,
    humidity: response.main?.humidity.toString(),
    description: response.weather?.[0].description,
    errorFlag: false,
    errorMessage: "",
  };
};

const getData = async (
  city: string,
  country: string,
  apiKey: string
): Promise<WeatherResponse> => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

  const weatherData: WeatherResponse = await fetch(url)
    .then((response) => {
      if (!response.ok || response.status === 401) {
        throw new Error("There was a problem fetching data", {
          cause: `${response.status} ${response.statusText}`,
        });
      }

      return response.json();
    })
    .then((data: CurrentWeatherDataResponse) => parseResponse(data, ""))
    .catch((error: Error) => {
      return parseResponse(null, `${error.message}: ${error.cause}`);
    });

  return weatherData;
};

export default getData;
