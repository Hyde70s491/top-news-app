import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import TopNews from "./TopNews";

describe("<TopNews /> test", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <TopNews />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
