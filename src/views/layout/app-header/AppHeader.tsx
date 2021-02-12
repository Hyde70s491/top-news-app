import React from "react";

import CategoryLinks from "../../components/category-links/CategoryLinks";
import CountrySelection from "../../components/country-selection/CountrySelection";
import UserAdministration from "./user-administration/UserAdministration";
import "./AppHeader.scss";

const AppHeader: React.FC = () => {
  return (
    <div className="app-header">
      <div className="app-header__content">
        <CountrySelection />
        <CategoryLinks />
        <div className="app-header__content__right">
          <UserAdministration />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
