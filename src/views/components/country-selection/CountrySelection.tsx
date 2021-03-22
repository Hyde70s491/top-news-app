import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dispatch } from "redux";

import { SelectedCountry } from "../../../selectors/constants/ConstantsSelectorModels";
import { selectCountries } from "../../../selectors/constants/ConstantsSelectors";
import { selectCountryImage } from "../../../selectors/parameters/ParametersSelectors";
import { updateCountry } from "../../../stores/parameters/ParametersActions";
import "./CountrySelection.scss";

interface CountrySelectionProps {
  readonly selectionClassName?: string;
}

const CountrySelection: React.FC<CountrySelectionProps> = (
  props: React.PropsWithChildren<CountrySelectionProps>
) => {
  const { selectionClassName } = props;

  const dispatch: Dispatch = useDispatch();
  const countries: SelectedCountry[] = useSelector(selectCountries);
  const selectedCountry: string = useSelector(selectCountryImage);
  const [isDropdownVisible, updateDropdownVisibility] = useState(false);

  const handleDropdownButtonClick = (countryId: string): void => {
    dispatch(updateCountry(countryId));
    updateDropdownVisibility(false);
  };

  const handleToggleButtonClick = (): void => {
    updateDropdownVisibility(!isDropdownVisible);
  };

  return (
    <div className="country-selection">
      <div
        className={`country-selection-dropdown${
          isDropdownVisible ? " country-selection-dropdown--open" : ""
        }${selectionClassName ? " " + selectionClassName : ""}`}
      >
        <button
          className="country-selection-dropdown__toggle-button"
          type="button"
          onClick={handleToggleButtonClick}
        >
          <div className="country-selection-dropdown__toggle-button__indicator"></div>
          <img
            className="country-selection-dropdown__country-image"
            src={selectedCountry}
            alt="selected country"
          />
        </button>

        <div className="country-selection-dropdown__options">
          {countries.map((country: SelectedCountry) => (
            <button
              className="country-selection-dropdown__options__entity"
              type="button"
              key={country.id}
              onClick={() => handleDropdownButtonClick(country.id)}
            >
              <img
                className="country-selection-dropdown__country-image"
                src={country.flag}
                alt="available country"
              />
              <span className="country-selection-dropdown__options__entity__name">
                {country.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <NavLink className="app-logo" to="/top-news">
        TopNews
      </NavLink>
    </div>
  );
};

export default CountrySelection;
