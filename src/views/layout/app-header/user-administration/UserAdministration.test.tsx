import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import UserAdministration from "./UserAdministration";

describe("<UserAdministration /> test", () => {
  it("renders expected entities", () => {
    render(
      <MemoryRouter>
        <UserAdministration />
      </MemoryRouter>
    );

    const actionButton = screen.getByText(/Sign In/i);
    expect(actionButton).toBeInTheDocument();

    const userImage = screen.getByAltText(/user/i);
    expect(userImage).toBeInTheDocument();
  });
});
