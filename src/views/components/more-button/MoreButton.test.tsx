import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import MoreButton from "./MoreButton";

describe("<MoreButton /> test", () => {
  it("renders expected entities", () => {
    render(
      <MemoryRouter>
        <MoreButton />
      </MemoryRouter>
    );

    const buttonLabel = screen.getByText(/Read More/i);
    expect(buttonLabel).toBeInTheDocument();

    const buttonIcon = screen.getByAltText(/more/i);
    expect(buttonIcon).toBeInTheDocument();
  });
});
