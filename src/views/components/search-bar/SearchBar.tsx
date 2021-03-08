import React from "react";

import "./SearchBar.scss";

interface SearchBarProps {
  readonly barClassName?: string;
}

const SearchBar: React.FC<SearchBarProps> = (
  props: React.PropsWithChildren<SearchBarProps>
) => {
  const { barClassName } = props;

  return (
    <div className={`search-bar${barClassName ? " " + barClassName : ""}`}>
      <input className="search-bar__query" placeholder="Search..." />
      <button className="search-bar__button">
        <img
          className="search-bar__button__icon"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="search"
        />
      </button>
    </div>
  );
};

export default SearchBar;
