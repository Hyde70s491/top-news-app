import React from "react";
import { useSelector } from "react-redux";

// import FeaturedNews from "./featured-news/FeaturedNews";
import NewsByCategory from "./news-by-category/NewsByCategory";
import TopNews from "./top-news/TopNews";

import { Category } from "../../../constants/Categories";
import { selectCategories } from "../../../selectors/constants/ConstantsSelectors";
import "./Home.scss";

const Home: React.FC = () => {
  const availableCategories: Category[] = useSelector(selectCategories);

  return (
    <div className="home-page">
      <TopNews />
      {/* <FeaturedNews /> */}
      {availableCategories.map((category: Category) => (
        <NewsByCategory key={category.name} category={category} />
      ))}
    </div>
  );
};

export default Home;
