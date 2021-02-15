import React from "react";

import CategoryLinks from "../../components/category-links/CategoryLinks";
import ContactPanel from "./contact-panel/ContactPanel";
import CountrySelection from "../../components/country-selection/CountrySelection";
import SearchBar from "../../components/search-bar/SearchBar";
import "./AppFooter.scss";

const AppFooter: React.FC = () => {
  return (
    <div className="app-footer">
      <div className="app-footer__content">
        <SearchBar barClassName="search-bar--footer" />
        <CategoryLinks linksClassName="category-links--footer" />
        <div className="app-footer__content__separator"></div>
        <div className="app-footer__content__bottom">
          <CountrySelection selectionClassName="country-selection-dropdown--footer" />
          <ContactPanel />
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
