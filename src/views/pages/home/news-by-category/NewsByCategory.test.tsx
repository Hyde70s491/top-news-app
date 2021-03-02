import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import NewsByCategory from "./NewsByCategory";

describe("<NewsByCategory /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <NewsByCategory />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
