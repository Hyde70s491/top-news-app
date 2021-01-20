import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("<App /> test", () => {
  it("renders welcome message", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const welcomeMessage = screen.getByText(/Hello, Top News App!/i);

    expect(welcomeMessage).toBeInTheDocument();
  });
});
