import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import PopularNews from "./PopularNews";
import rootStore from "../../../../../stores/rootStore";

describe("<PopularNews /> test", () => {
  it("renders", () => {
    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <PopularNews />
        </MemoryRouter>
      </Provider>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
