import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import MoreButton from "../../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../../components/section-title/SectionTitle";

import NewsDataModel from "../../../../models/NewsDataModel";
import { selectTopCategoryNews } from "../../../../selectors/news/NewsSelectors";
import "./SimilarNews.scss";

const SimilarNews: React.FC = () => {
  const history = useHistory();
  const similarNews: NewsDataModel[] = useSelector(selectTopCategoryNews);

  return (
    <div className="similar-news">
      <SectionTitle titleLabel="SIMILAR NEWS" />

      <div className="similar-news__entities">
        {similarNews.map((news: NewsDataModel) => (
          <div className="similar-news__entities__thumbnail" key={news.id}>
            <NewsThumbnail
              thumbnailType={ThumbnailType.Similar}
              thumbnailData={news}
            />
          </div>
        ))}
      </div>

      <MoreButton
        buttonCallback={() =>
          history.push(`/top-news/${similarNews[0].category}`)
        }
      />
    </div>
  );
};

export default SimilarNews;
