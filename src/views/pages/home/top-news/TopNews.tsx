import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import MoreButton from "../../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../../components/section-title/SectionTitle";
import StatusIndicator from "../../../components/status-indicator/StatusIndicator";

import { ApiStatus } from "../../../../models/NewsCategoryStateModel";
import NewsDataModel from "../../../../models/NewsDataModel";
import { selectHeadlinesApi } from "../../../../selectors/api/ApiSelectors";
import { selectTopHeadlines } from "../../../../selectors/news/NewsSelectors";
import "./TopNews.scss";

const TopNews: React.FC = () => {
  const history = useHistory();
  const apiStatus: ApiStatus = useSelector(selectHeadlinesApi);
  const topHeadlines: NewsDataModel[] = useSelector(selectTopHeadlines);

  return (
    <div className="top-news">
      <SectionTitle titleLabel="TOP HEADLINES" />

      <StatusIndicator apiStatus={apiStatus} />

      {topHeadlines.length ? (
        <div className="top-news__entities">
          <div className="top-news__entities__thumbnail top-news__entities__thumbnail--left">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Headlines}
              thumbnailData={topHeadlines[0]}
            />
          </div>
          <div className="top-news__entities__thumbnail top-news__entities__thumbnail--right-top">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Headlines}
              thumbnailData={topHeadlines[1]}
            />
          </div>
          <div className="top-news__entities__thumbnail top-news__entities__thumbnail--right-bottom">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Headlines}
              thumbnailData={topHeadlines[2]}
            />
          </div>
        </div>
      ) : null}

      {topHeadlines.length ? (
        <MoreButton
          buttonCallback={() => history.push("/top-news/headlines")}
        />
      ) : null}
    </div>
  );
};

export default TopNews;
