interface FormElements extends HTMLFormControlsCollection {
  city: HTMLInputElement;
  country: HTMLInputElement;
}

export interface WeatherFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export interface WeatherProps {
  city: string;
  country: string;
  description: string;
  humidity: string;
  temperature: string;
  errorFlag: boolean;
  errorMessage: string;
}

export interface FormProps {
  handleSubmit(event: React.FormEvent<WeatherFormElement>): Promise<void>;
}
