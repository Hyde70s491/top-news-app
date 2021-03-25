import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import SearchBar from "./SearchBar";
import rootStore from "../../../stores/rootStore";

describe("<SearchBar /> test", () => {
  it("renders expected entities", () => {
    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      </Provider>
    );

    const searchQuery = screen.getByPlaceholderText(/Search.../i);
    expect(searchQuery).toBeInTheDocument();

    const searchIcon = screen.getByAltText(/search/i);
    expect(searchIcon).toBeInTheDocument();
  });
});
