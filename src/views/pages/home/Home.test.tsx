import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Home from "./Home";

describe("<Home /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
