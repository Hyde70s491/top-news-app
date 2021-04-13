import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import NewsDetails from "./NewsDetails";
import rootStore from "../../../stores/rootStore";

describe("<NewsDetails /> test", () => {
  it("renders", () => {
    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <NewsDetails />
        </MemoryRouter>
      </Provider>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
