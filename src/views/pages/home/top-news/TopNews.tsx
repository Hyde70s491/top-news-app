import React from "react";

import SectionTitle from "../../../components/section-title/SectionTitle";
import "./TopNews.scss";

const TopNews: React.FC = () => {
  return (
    <div className="top-news">
      <SectionTitle titleLabel="TOP HEADLINES" />
      <div className="top-news__entities">
        <div className="top-news__entities__thumbnail--left"></div>
        <div className="top-news__entities__thumbnail--right-top"></div>
        <div className="top-news__entities__thumbnail--right-bottom"></div>
      </div>
    </div>
  );
};

export default TopNews;
