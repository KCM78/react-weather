import React from 'react';

interface ISetValues {
  setValues(e: React.FormEvent<HTMLFormElement>): Promise<void>;
}

export const WeatherForm: React.FunctionComponent<ISetValues> = ({ setValues }) => {
  return (
    <form onSubmit={setValues}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Weather</button>
    </form>
  );
};
