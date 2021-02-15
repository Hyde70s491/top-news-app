import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import ContactPanel from "./ContactPanel";

describe("<ContactPanel /> test", () => {
  it("renders expected entities", () => {
    render(
      <MemoryRouter>
        <ContactPanel />
      </MemoryRouter>
    );

    const developerEmail = screen.getByText(/stefan.misic.491@gmail.com/i);
    expect(developerEmail).toBeInTheDocument();

    const designerEmail = screen.getByText(/nastijak97@gmail.com/i);
    expect(designerEmail).toBeInTheDocument();

    const developerImage = screen.getByAltText(/developer/i);
    expect(developerImage).toBeInTheDocument();

    const designerImage = screen.getByAltText(/designer/i);
    expect(designerImage).toBeInTheDocument();
  });
});
