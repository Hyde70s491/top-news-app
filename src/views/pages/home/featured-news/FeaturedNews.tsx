import React from "react";

import PopularNews from "./popular-news/PopularNews";
import SuggestedNews from "./suggested-news/SuggestedNews";
import "./FeaturedNews.scss";

const FeaturedNews: React.FC = () => {
  return (
    <div className="featured-news">
      <div className="featured-news__left">
        <PopularNews />
      </div>

      <div className="featured-news__right">
        <SuggestedNews />
      </div>
    </div>
  );
};

export default FeaturedNews;
