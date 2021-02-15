import React from "react";

import "./SearchBar.scss";

const SearchBar: React.FC = () => {
  return (
    <button className="search-bar" type="button">
      <div className="search-bar__query">Search</div>
      <img
        className="search-bar__icon"
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        alt="search"
      />
    </button>
  );
};

export default SearchBar;
