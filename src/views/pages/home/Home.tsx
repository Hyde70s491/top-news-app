import React from "react";

import FeaturedNews from "./featured-news/FeaturedNews";
import TopNews from "./top-news/TopNews";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <TopNews />
      <FeaturedNews />
    </div>
  );
};

export default Home;
