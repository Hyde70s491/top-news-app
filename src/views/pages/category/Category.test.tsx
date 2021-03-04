import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Category from "./Category";

describe("<Category /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Category />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
