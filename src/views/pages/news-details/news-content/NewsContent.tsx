import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { NewsData } from "../../../../selectors/news/NewsSelectorModels";
import { selectNewsData } from "../../../../selectors/parameters/ParametersSelectors";
import { setNewsData } from "../../../../stores/parameters/ParametersActions";
import "./NewsContent.scss";

const NewsContent: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const newsData: NewsData | null = useSelector(selectNewsData);

  useEffect(() => {
    const storagedNewsData: string | null = sessionStorage.getItem("newsData");

    if (storagedNewsData && !newsData) {
      const parsedNewsData: NewsData = JSON.parse(storagedNewsData);
      dispatch(setNewsData(parsedNewsData));
    }
  }, [dispatch, newsData]);

  return (
    <div className="news-content">
      <span className="news-content__title">{newsData?.title}</span>
      <span className="news-content__author">Author: {newsData?.author}</span>
      <img
        className="news-content__image"
        src={newsData?.imageUrl}
        alt="news"
      />

      <div className="news-content__body">
        <div className="news-content__body__left">
          <span className="news-content__subtitle">{newsData?.subtitle}</span>
          <span className="news-content__text">{newsData?.text}</span>
        </div>

        <div className="news-content__body__right">
          {/* <button className="news-content__share-button">
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
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
