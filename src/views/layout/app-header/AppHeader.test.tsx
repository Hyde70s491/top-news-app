import React from "react";
import { render } from "@testing-library/react";

import AppHeader from "./AppHeader";

describe("<AppHeader /> test", () => {
  it("renders", () => {
    render(<AppHeader />);

    const a = 1;

    expect(a).toEqual(1);
  });
});
