import React from "react";
import { cleanup, render, RenderResult } from "@testing-library/react";
import ShowError from "./ShowError";

const props = {
  errorMessage: "There was a problem fetching data 401 Unauthorized",
};

let component: RenderResult;

describe("WeatherForm", () => {
  beforeEach(() => {
    component = render(<ShowError error={props.errorMessage} />);
  });

  afterEach(() => {
    cleanup();
  });

  it("should show error message", () => {
    expect(
      component.getByText("There was a problem fetching data 401 Unauthorized")
    ).toBeInTheDocument();
  });
});
