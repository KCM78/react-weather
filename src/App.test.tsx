import React from "react";
import {
  cleanup,
  render,
  RenderResult,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

let component: RenderResult;

describe("App", () => {
  beforeEach(() => {
    component = render(<App />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("should render heading", () => {
    expect(
      component.getByText(/simple react weather app/i)
    ).toBeInTheDocument();
  });

  it("should call fetch when form submitted", () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });

    userEvent.type(screen.getByPlaceholderText("City..."), "York");
    userEvent.type(screen.getByPlaceholderText("Country..."), "UK");
    userEvent.click(screen.getByRole("button"));

    waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toBeCalledWith(
        "York",
        "UK",
        process.env.REACT_APP_API_KEY
      );
    });
  });

  it("should display error component when api returns error", () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusCode: 401,
      });
    });

    userEvent.type(screen.getByPlaceholderText("City..."), "York");
    userEvent.type(screen.getByPlaceholderText("Country..."), "UK");
    userEvent.click(screen.getByRole("button"));

    waitFor(() => {
      expect(
        component.getByText(
          "There was a problem fetching data 401 Unauthorized"
        )
      ).toBeInTheDocument();
    });
  });
});
