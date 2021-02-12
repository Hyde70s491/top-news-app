import React from "react";
import { render, screen } from "@testing-library/react";

import CountrySelection from "./CountrySelection";

describe("<CountrySelection /> test", () => {
  it("renders expected entities", () => {
    render(<CountrySelection />);

    const selectedCountryImage = screen.getByAltText(/selected country/i);
    expect(selectedCountryImage).toBeInTheDocument();

    const appLogo = screen.getByText(/TopNews/i);
    expect(appLogo).toBeInTheDocument();

    const dropdownOptionCountryImage = screen.getByAltText(
      /available country/i
    );
    expect(dropdownOptionCountryImage).toBeInTheDocument();

    const dropdownOptionCountryName = screen.getByText(/Great Britain/i);
    expect(dropdownOptionCountryName).toBeInTheDocument();
  });
});
