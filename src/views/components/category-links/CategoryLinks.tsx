import React from "react";
import { NavLink } from "react-router-dom";

import "./CategoryLinks.scss";

interface CategoryLinksProps {
  readonly linksClassName?: string;
}

const CategoryLinks: React.FC<CategoryLinksProps> = (
  props: React.PropsWithChildren<CategoryLinksProps>
) => {
  const { linksClassName } = props;

  return (
    <div
      className={`category-links${linksClassName ? " " + linksClassName : ""}`}
    >
      <NavLink
        className={`category-links__entity${false ? " frozen-link" : ""}`}
        activeClassName="category-links__entity--active"
        to="/top-news/category1"
      >
        Category1
      </NavLink>
    </div>
  );
};

export default CategoryLinks;
