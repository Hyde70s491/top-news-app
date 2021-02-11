import React from "react";

import CountrySelection from "../../components/country-selection/CountrySelection";
import "./AppHeader.scss";

const AppHeader: React.FC = () => {
  return (
    <div className="app-header">
      <div className="app-header__content">
        <CountrySelection></CountrySelection>
      </div>
    </div>
  );
};

export default AppHeader;
