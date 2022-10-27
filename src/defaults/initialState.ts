import { WeatherProps } from "../components/WeatherForm/types";
import { ErrorType } from "../services/types";

const initialWeatherDataState: WeatherProps & ErrorType = {
  city: "",
  country: "",
  temperature: "",
  humidity: "",
  description: "",
  errorFlag: false,
  errorMessage: "",
};

export default initialWeatherDataState;
