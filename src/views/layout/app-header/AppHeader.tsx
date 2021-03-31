import React from "react";

import CategoryLinks from "../../components/category-links/CategoryLinks";
import CountrySelection from "../../components/country-selection/CountrySelection";
import SearchBar from "../../components/search-bar/SearchBar";
// import UserAdministration from "./user-administration/UserAdministration";
import "./AppHeader.scss";

const AppHeader: React.FC = () => {
  return (
    <div className="app-header">
      <div className="app-header__content">
        <div className="app-header__content__segment app-header__content__segment--left">
          <CountrySelection />
        </div>
        <div className="app-header__content__segment app-header__content__segment--centre">
          <CategoryLinks />
        </div>
        <div className="app-header__content__segment app-header__content__segment--right">
          {/* <UserAdministration /> */}
          <SearchBar barClassName="search-bar--header" />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
