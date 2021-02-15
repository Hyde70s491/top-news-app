import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import AppFooter from "./AppFooter";

describe("<AppFooter /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <AppFooter />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
