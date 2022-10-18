import React from "react";
import { FormProps } from "./types";

const WeatherForm: React.FC<FormProps> = ({ handleSubmit }: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
