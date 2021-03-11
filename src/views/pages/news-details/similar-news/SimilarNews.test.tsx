import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import SimilarNews from "./SimilarNews";

describe("<SimilarNews /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <SimilarNews />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
