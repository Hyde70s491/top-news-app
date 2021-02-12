import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import AppHeader from "./AppHeader";

describe("<AppHeader /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <AppHeader />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
