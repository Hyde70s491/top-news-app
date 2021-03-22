import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectCategories } from "../../../selectors/constants/ConstantsSelectors";
import "./CategoryLinks.scss";

interface CategoryLinksProps {
  readonly linksClassName?: string;
}

const CategoryLinks: React.FC<CategoryLinksProps> = (
  props: React.PropsWithChildren<CategoryLinksProps>
) => {
  const { linksClassName } = props;

  const availableCategories: string[] = useSelector(selectCategories);

  return (
    <div
      className={`category-links${linksClassName ? " " + linksClassName : ""}`}
    >
      {availableCategories.map((category: string) => (
        <NavLink
          className="category-links__entity"
          activeClassName="category-links__entity--active"
          key={category}
          to={`/top-news/${category}`}
        >
          {category}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryLinks;
