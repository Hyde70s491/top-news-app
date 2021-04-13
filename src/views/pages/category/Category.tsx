import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Dispatch } from "redux";

import MoreButton from "../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../components/section-title/SectionTitle";

import NewsDataModel from "../../../models/NewsDataModel";
import { selectCategoryNews } from "../../../selectors/news/NewsSelectors";
import { selectCategory } from "../../../selectors/parameters/ParametersSelectors";
import { setCategory } from "../../../stores/parameters/ParametersActions";
import "./Category.scss";

const Category: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const location = useLocation();
  const category: string | null = useSelector(selectCategory);
  const categoryNews: NewsDataModel[] = useSelector(selectCategoryNews);

  useEffect(() => {
    const currentLocation = location.pathname.split("/")[2];
    dispatch(setCategory(currentLocation));
  }, [category, dispatch, location]);

  return (
    <div className="category-page">
      <SectionTitle titleLabel={category} />

      <div className="category-page__entities">
        {categoryNews.map((news: NewsDataModel) => (
          <div className="category-page__entities__thumbnail" key={news.id}>
            <NewsThumbnail
              thumbnailType={ThumbnailType.CategoryDetails}
              thumbnailData={news}
            />
          </div>
        ))}
      </div>

      <MoreButton
        buttonCallback={() =>
          console.log("Show more dummy category headlines!")
        }
      />
    </div>
  );
};

export default Category;
