import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import FormattedDate from "./FormattedDate";

describe("<FormattedDate /> test", () => {
  it("renders expected entities", () => {
    render(
      <MemoryRouter>
        <FormattedDate />
      </MemoryRouter>
    );

    const dateLabel = screen.getByText(/Friday, February 16 2021/i);
    expect(dateLabel).toBeInTheDocument();
  });
});
