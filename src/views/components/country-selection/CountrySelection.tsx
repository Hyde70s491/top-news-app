import React from "react";
import { NavLink } from "react-router-dom";

import "./CountrySelection.scss";

interface CountrySelectionProps {
  readonly selectionClassName?: string;
}

const CountrySelection: React.FC<CountrySelectionProps> = (
  props: React.PropsWithChildren<CountrySelectionProps>
) => {
  const { selectionClassName } = props;

  return (
    <div className="country-selection">
      <div
        className={`country-selection-dropdown${
          false ? " country-selection-dropdown--open" : ""
        }${selectionClassName ? " " + selectionClassName : ""}`}
      >
        <button
          className="country-selection-dropdown__toggle-button"
          type="button"
        >
          <div className="country-selection-dropdown__toggle-button__indicator"></div>
          <img
            className="country-selection-dropdown__country-image"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="selected country"
          />
        </button>

        <div className="country-selection-dropdown__options">
          <button
            className="country-selection-dropdown__options__entity"
            type="button"
          >
            <img
              className="country-selection-dropdown__country-image country-selection-dropdown__country-image--inverse"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="available country"
            />
            <span className="country-selection-dropdown__options__entity__name">
              Great Britain
            </span>
          </button>
        </div>
      </div>

      <NavLink
        className={`app-logo${false ? " frozen-link" : ""}`}
        to="/top-news"
      >
        TopNews
      </NavLink>
    </div>
  );
};

export default CountrySelection;
