import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import AdvertisingBanner from "./AdvertisingBanner";

describe("<AdvertisingBanner /> test", () => {
  it("renders expected entities", () => {
    render(
      <MemoryRouter>
        <AdvertisingBanner />
      </MemoryRouter>
    );

    const bannerImage = screen.getByAltText(/banner/i);
    expect(bannerImage).toBeInTheDocument();
  });
});
