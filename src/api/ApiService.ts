import { CurrentWeatherDataResponse } from "./WeatherDataResponse";

const getData = async (
  city: string,
  country: string,
  apiKey: string
): Promise<CurrentWeatherDataResponse> => {
  const weatherData = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 401) {
        throw new Error("Unauthorised access");
      }
      throw new Error("There was a problem fetching data", {
        cause: `${response.status}: ${response.statusText}`,
      });
    })
    .catch((error: Error) => {
      return {
        errorFlag: true,
        errorMessage: error.message,
      };
    });

  if (weatherData.errorFlag) {
    return weatherData;
  }
  return {
    ...weatherData,
    errorFlag: false,
    errorMessage: "",
  };
};

export default getData;
