import React from "react";

import "./NewsContent.scss";

const NewsContent: React.FC = () => {
  return (
    <div className="news-content">
      <span className="news-content__title">NEWS DETAILS TITLE</span>
      <span className="news-content__author">Author: Firstname Lastname</span>
      <img
        className="news-content__image"
        src="https://picsum.photos/id/1015/600/300"
        alt="news"
      />

      <div className="news-content__body">
        <div className="news-content__body__left">
          <span className="news-content__subtitle">NEWS DETAILS SUBTITLE</span>
          <span className="news-content__text">News Details Text</span>
        </div>

        <div className="news-content__body__right">
          <button className="news-content__share-button">
            <img
              className="news-content__share-button__icon"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="facebook"
            />
          </button>
          <button className="news-content__share-button">
            <img
              className="news-content__share-button__icon"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="twitter"
            />
          </button>
          <button className="news-content__share-button">
            <img
              className="news-content__share-button__icon"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="email"
            />
          </button>
          <button className="news-content__share-button">
            <img
              className="news-content__share-button__icon"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="link"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
