import React from "react";

interface ISetValues {
  setValues(e: React.SyntheticEvent): Promise<void>;
}

const WeatherForm: React.FC<ISetValues> = ({ setValues }) => {
  return (
    <form onSubmit={setValues}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
