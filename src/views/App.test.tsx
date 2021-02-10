import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("<App /> test", () => {
  it("renders", () => {
    render(<App />);

    const a = 1;

    expect(a).toEqual(1);
  });
});
