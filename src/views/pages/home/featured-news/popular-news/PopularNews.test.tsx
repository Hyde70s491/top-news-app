import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import PopularNews from "./PopularNews";

describe("<PopularNews /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <PopularNews />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
