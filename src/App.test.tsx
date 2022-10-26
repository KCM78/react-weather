import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render heading", () => {
    const wrapper = render(<App />);

    expect(wrapper.getByText(/simple react weather app/i)).toBeInTheDocument();
  });
});
