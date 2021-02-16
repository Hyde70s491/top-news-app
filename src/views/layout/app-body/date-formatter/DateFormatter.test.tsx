import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import DateFormatter from "./DateFormatter";

describe("<DateFormatter /> test", () => {
  it("renders expected entities", () => {
    render(
      <MemoryRouter>
        <DateFormatter />
      </MemoryRouter>
    );

    const dateLabel = screen.getByText(/Friday, February 16 2021/i);
    expect(dateLabel).toBeInTheDocument();
  });
});
