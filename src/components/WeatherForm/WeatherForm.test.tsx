import React from "react";
import { act, render, RenderResult, screen, fireEvent } from "@testing-library/react";
import WeatherForm from "./WeatherForm";

const handleSubmit = jest.fn().mockImplementation((e) => e.preventDefault());
let component: RenderResult;

describe("WeatherForm", () => {
  beforeEach(() => {
    component = render(<WeatherForm handleSubmit={handleSubmit} />);
  });

  afterEach(() => {
    component.unmount();
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

  it("should call handleSubmit when button clicked", () => {
    const btn = screen.getByRole("button");
    const city = component.getByPlaceholderText("City...");
    const country = component.getByPlaceholderText("Country...");
    act(() => {
      fireEvent.change(city, "York");
      fireEvent.change(country, "UK");
      fireEvent.submit(btn);
      expect(handleSubmit).toHaveBeenCalled();
    });
  });

});