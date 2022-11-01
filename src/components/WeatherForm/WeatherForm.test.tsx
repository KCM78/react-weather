import React from "react";
import { cleanup, render, RenderResult, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WeatherForm from "./WeatherForm";

const handleSubmit = jest.fn().mockImplementation((e) => e.preventDefault());
let component: RenderResult;

describe("WeatherForm", () => {
  beforeEach(() => {
    component = render(<WeatherForm handleSubmit={handleSubmit} />);
  });

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it("should render the city input field", () => {
    expect(component.getByPlaceholderText("City...")).toBeTruthy();
  });

  it("should render the country input field", () => {
    expect(component.getByPlaceholderText("Country...")).toBeTruthy();
  });

  it("should render a submit button", () => {
    expect(component.getByText("Get Weather")).toBeTruthy();
  });

  it("should call handleSubmit when button clicked", () => {
    const btn = screen.getByRole("button");
    const city = component.getByPlaceholderText("City...");
    const country = component.getByPlaceholderText("Country...");

    userEvent.type(city, "York");
    userEvent.type(country, "UK");
    userEvent.click(btn);

    waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(handleSubmit).toBeCalledWith("York", "UK");
    });
  });
});
