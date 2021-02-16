import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import SectionTitle from "./SectionTitle";

describe("<SectionTitle /> test", () => {
  it("renders expected entities", () => {
    const titleLabelProp = "Test Label";

    render(
      <MemoryRouter>
        <SectionTitle titleLabel={titleLabelProp} />
      </MemoryRouter>
    );

    const expectedTitleLabel = screen.getByText(/Test Label/i);
    expect(expectedTitleLabel).toBeInTheDocument();
  });
});
