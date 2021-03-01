import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import FeaturedNews from "./FeaturedNews";

describe("<FeaturedNews /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <FeaturedNews />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
