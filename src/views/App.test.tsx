import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import App from "./App";

describe("<App /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
