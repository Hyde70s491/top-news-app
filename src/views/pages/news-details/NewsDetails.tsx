import React from "react";

import NewsContent from "./news-content/NewsContent";
import SimilarNews from "./similar-news/SimilarNews";
import "./NewsDetails.scss";

const NewsDetails: React.FC = () => {
  return (
    <div className="news-details">
      <NewsContent />
      <SimilarNews />
    </div>
  );
};

export default NewsDetails;
