import React from "react";
import { render, RenderResult } from "@testing-library/react";
import WeatherForm from "./WeatherForm";

const handleSubmit = jest.fn();
let component: RenderResult;

describe("WeatherForm", () => {
  beforeEach(() => {
    component = render(<WeatherForm handleSubmit={handleSubmit} />);
  });

  it("should render the city input field", () => {
    expect(component.getByPlaceholderText("City...")).toBeTruthy();
  });

  it("should render the country input field", () => {
    expect(component.getByPlaceholderText("Country...")).toBeTruthy();
  })

  it("should render a submit button", () => {
    expect(component.getByText("Get Weather")).toBeTruthy();
  });
});