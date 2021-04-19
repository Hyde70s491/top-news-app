import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import MoreButton from "../../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../../components/section-title/SectionTitle";
import StatusIndicator from "../../../components/status-indicator/StatusIndicator";

import { Category } from "../../../../constants/Categories";
import { ApiStatus } from "../../../../models/NewsCategoryStateModel";
import NewsDataModel from "../../../../models/NewsDataModel";
import "./NewsByCategory.scss";

interface NewsByCategoryProps {
  readonly category: Category;
}

const NewsByCategory: React.FC<NewsByCategoryProps> = (
  props: React.PropsWithChildren<NewsByCategoryProps>
) => {
  const { category } = props;

  const history = useHistory();
  const apiStatus: ApiStatus = useSelector(category.apiStatusSelector);
  const topCategoryNews: NewsDataModel[] = useSelector(category.selector);

  return (
    <div className="news-by-category">
      <SectionTitle titleLabel={category.name} />

      <StatusIndicator apiStatus={apiStatus} />

      {topCategoryNews.length ? (
        <div className="news-by-category__entities">
          {topCategoryNews.map((news: NewsDataModel) => (
            <div
              className="news-by-category__entities__thumbnail"
              key={news.id}
            >
              <NewsThumbnail
                thumbnailType={ThumbnailType.Category}
                thumbnailData={news}
              />
            </div>
          ))}
        </div>
      ) : null}

      {topCategoryNews.length ? (
        <MoreButton
          buttonCallback={() => history.push(`/top-news/${category.name}`)}
        />
      ) : null}
    </div>
  );
};

export default NewsByCategory;
