import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import SearchBar from "./SearchBar";

describe("<SearchBar /> test", () => {
  it("renders expected entities", () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );

    const searchQuery = screen.getByText(/Search/i);
    expect(searchQuery).toBeInTheDocument();

    const searchIcon = screen.getByAltText(/search/i);
    expect(searchIcon).toBeInTheDocument();
  });
});
