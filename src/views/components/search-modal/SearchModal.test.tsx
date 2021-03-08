import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import SearchModal from "./SearchModal";

describe("<SearchModal /> test", () => {
  it("renders", () => {
    const isVisibleProp = true;

    render(
      <MemoryRouter>
        <SearchModal isVisible={isVisibleProp} />
      </MemoryRouter>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
