import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("<App /> test", () => {
  it("renders welcome message", () => {
    render(<App />);

    const welcomeMessage = screen.getByText(/Hello, Top News App!/i);

    expect(welcomeMessage).toBeInTheDocument();
  });
});
