import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import NewsContent from "./news-content/NewsContent";
import SimilarNews from "./similar-news/SimilarNews";

import NewsDataModel from "../../../models/NewsDataModel";
import {
  setCategory,
  setNewsData,
} from "../../../stores/parameters/ParametersActions";
import "./NewsDetails.scss";

const NewsDetails: React.FC = () => {
  const storagedNewsData: string | null = sessionStorage.getItem("newsData");

  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    if (storagedNewsData) {
      const parsedNewsData: NewsDataModel = JSON.parse(storagedNewsData);
      dispatch(setNewsData(parsedNewsData));
      dispatch(setCategory(parsedNewsData.category));
    }
  }, [dispatch, storagedNewsData]);

  return (
    <div className="news-details">
      <NewsContent />
      <SimilarNews />
    </div>
  );
};

export default NewsDetails;
