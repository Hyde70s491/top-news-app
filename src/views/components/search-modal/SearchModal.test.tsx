import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import SearchModal from "./SearchModal";
import rootStore from "../../../stores/rootStore";

describe("<SearchModal /> test", () => {
  it("renders expected entities", () => {
    const isVisibleProp = true;

    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <SearchModal isVisible={isVisibleProp} />
        </MemoryRouter>
      </Provider>
    );

    const closeIcon = screen.getByAltText(/close/i);
    expect(closeIcon).toBeInTheDocument();
  });
});
