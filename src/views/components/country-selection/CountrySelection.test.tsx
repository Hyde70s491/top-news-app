import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import CountrySelection from "./CountrySelection";
import rootStore from "../../../stores/rootStore";

describe("<CountrySelection /> test", () => {
  it("renders expected entities", () => {
    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <CountrySelection />
        </MemoryRouter>
      </Provider>
    );

    const selectedCountryImage = screen.getByAltText(/selected country/i);
    expect(selectedCountryImage).toBeInTheDocument();

    const appLogo = screen.getByText(/TopNews/i);
    expect(appLogo).toBeInTheDocument();

    const dropdownOptionCountryImages = screen.getAllByAltText(
      /available country/i
    );
    expect(dropdownOptionCountryImages).toHaveLength(7);

    const dropdownOptionCountryName1 = screen.getByText(/Australia/i);
    expect(dropdownOptionCountryName1).toBeInTheDocument();

    const dropdownOptionCountryName2 = screen.getByText(/Canada/i);
    expect(dropdownOptionCountryName2).toBeInTheDocument();

    const dropdownOptionCountryName3 = screen.getByText(/Great Britain/i);
    expect(dropdownOptionCountryName3).toBeInTheDocument();

    const dropdownOptionCountryName4 = screen.getByText(/Ireland/i);
    expect(dropdownOptionCountryName4).toBeInTheDocument();

    const dropdownOptionCountryName5 = screen.getByText(/New Zealand/i);
    expect(dropdownOptionCountryName5).toBeInTheDocument();

    const dropdownOptionCountryName6 = screen.getByText(/United States/i);
    expect(dropdownOptionCountryName6).toBeInTheDocument();

    const dropdownOptionCountryName7 = screen.getByText(/South Africa/i);
    expect(dropdownOptionCountryName7).toBeInTheDocument();
  });
});
