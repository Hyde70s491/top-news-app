import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import SimilarNews from "./SimilarNews";
import rootStore from "../../../../stores/rootStore";

describe("<SimilarNews /> test", () => {
  it("renders", () => {
    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <SimilarNews />
        </MemoryRouter>
      </Provider>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
