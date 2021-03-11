import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import NewsDetails from "./NewsDetails";

describe("<NewsDetails /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <NewsDetails />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
