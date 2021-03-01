import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import SuggestedNews from "./SuggestedNews";

describe("<SuggestedNews /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <SuggestedNews />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
