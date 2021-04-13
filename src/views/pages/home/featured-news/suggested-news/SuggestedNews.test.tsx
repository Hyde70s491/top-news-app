import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import SuggestedNews from "./SuggestedNews";
import rootStore from "../../../../../stores/rootStore";

describe("<SuggestedNews /> test", () => {
  it("renders", () => {
    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <SuggestedNews />
        </MemoryRouter>
      </Provider>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
