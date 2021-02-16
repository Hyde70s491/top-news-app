import React from "react";

import TopNews from "./top-news/TopNews";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <TopNews />
    </div>
  );
};

export default Home;
