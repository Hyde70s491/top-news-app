import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import MoreButton from "../../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../../components/section-title/SectionTitle";

import { Category } from "../../../../constants/Categories";
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
  const topCategoryNews = useSelector(category.selector);

  if (!topCategoryNews.length) {
    return null;
  }

  return (
    <div className="news-by-category">
      <SectionTitle titleLabel={category.name} />

      <div className="news-by-category__entities">
        {topCategoryNews.map((news: NewsDataModel) => (
          <div className="news-by-category__entities__thumbnail" key={news.id}>
            <NewsThumbnail
              thumbnailType={ThumbnailType.Category}
              thumbnailData={news}
            />
          </div>
        ))}
      </div>

      <MoreButton
        buttonCallback={() => history.push(`/top-news/${category.name}`)}
      />
    </div>
  );
};

export default NewsByCategory;
