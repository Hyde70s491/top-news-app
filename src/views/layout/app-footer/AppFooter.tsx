import React from "react";

import SearchBar from "../../components/search-bar/SearchBar";
import "./AppFooter.scss";

const AppFooter: React.FC = () => {
  return (
    <div className="app-footer">
      <div className="app-footer__content">
        <SearchBar barClassName="search-bar--footer" />
      </div>
    </div>
  );
};

export default AppFooter;
