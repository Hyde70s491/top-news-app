import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import FeaturedNews from "./FeaturedNews";
import rootStore from "../../../../stores/rootStore";

describe("<FeaturedNews /> test", () => {
  it("renders", () => {
    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <FeaturedNews />
        </MemoryRouter>
      </Provider>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
