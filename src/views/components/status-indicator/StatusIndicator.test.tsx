import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import StatusIndicator from "./StatusIndicator";
import { ApiStatus } from "../../../models/NewsCategoryStateModel";

describe("<StatusIndicator /> test", () => {
  it("renders expected entities", () => {
    const apiStatusProp = ApiStatus.Loading;

    render(
      <MemoryRouter>
        <StatusIndicator apiStatus={apiStatusProp} />
      </MemoryRouter>
    );

    const expectedStatusMessage = screen.getByText(/Loading news.../i);
    expect(expectedStatusMessage).toBeInTheDocument();
  });
});
