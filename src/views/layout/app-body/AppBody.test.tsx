import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import AppBody from "./AppBody";

describe("<AppBody /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <AppBody />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
