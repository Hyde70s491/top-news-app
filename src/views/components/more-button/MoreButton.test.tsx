import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import MoreButton from "./MoreButton";

describe("<MoreButton /> test", () => {
  it("renders expected entities", () => {
    const buttonCallbackProp = () => console.log("Test Callback");

    render(
      <MemoryRouter>
        <MoreButton buttonCallback={buttonCallbackProp} />
      </MemoryRouter>
    );

    const buttonLabel = screen.getByText(/Read More/i);
    expect(buttonLabel).toBeInTheDocument();

    const buttonIcon = screen.getByAltText(/more/i);
    expect(buttonIcon).toBeInTheDocument();
  });
});
