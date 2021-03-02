import React from "react";

import FeaturedNews from "./featured-news/FeaturedNews";
import NewsByCategory from "./news-by-category/NewsByCategory";
import TopNews from "./top-news/TopNews";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <TopNews />
      <FeaturedNews />
      <NewsByCategory />
    </div>
  );
};

export default Home;
