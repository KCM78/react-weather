import React from "react";
import { cleanup, render, RenderResult } from "@testing-library/react";
import ShowWeather from "./ShowWeather";

const props = {
  city: "York",
  country: "UK",
  temperature: "12",
  humidity: "40",
  description: "Cloudy",
  errorFlag: false,
  errorMessage: "",
};

let component: RenderResult;

describe("WeatherForm", () => {
  beforeEach(() => {
    component = render(<ShowWeather {...props} />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should display the city and country", () => {
    expect(component.getByText("Location: York, UK")).toBeTruthy();
  });

  it("should display the temperature", () => {
    expect(component.getByText("Temperature: 12C")).toBeTruthy();
  });

  it("should display the humidity", () => {
    expect(component.getByText("Humidity: 40")).toBeTruthy();
  });

  it("should display the conditions", () => {
    expect(component.getByText("Conditions: Cloudy")).toBeTruthy();
  });
});
