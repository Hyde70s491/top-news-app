import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import CategoryLinks from "./CategoryLinks";

describe("<CategoryLinks /> test", () => {
  it("renders expected entities", () => {
    render(
      <MemoryRouter>
        <CategoryLinks />
      </MemoryRouter>
    );

    const categoryLink = screen.getByText(/Category1/i);
    expect(categoryLink).toBeInTheDocument();
  });
});
