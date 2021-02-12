import React from "react";

import CategoryLinks from "../../components/category-links/CategoryLinks";
import CountrySelection from "../../components/country-selection/CountrySelection";
import "./AppHeader.scss";

const AppHeader: React.FC = () => {
  return (
    <div className="app-header">
      <div className="app-header__content">
        <CountrySelection></CountrySelection>
        <CategoryLinks></CategoryLinks>
        <div className="app-header__content__right"></div>
      </div>
    </div>
  );
};

export default AppHeader;
