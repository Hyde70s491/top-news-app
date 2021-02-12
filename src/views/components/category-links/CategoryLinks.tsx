import React from "react";
import { NavLink } from "react-router-dom";

import "./CategoryLinks.scss";

const CategoryLinks: React.FC = () => {
  return (
    <div className="category-links">
      <NavLink
        className="category-links__entity"
        activeClassName="category-links__entity--active"
        to="/category1"
      >
        Category1
      </NavLink>
    </div>
  );
};

export default CategoryLinks;
