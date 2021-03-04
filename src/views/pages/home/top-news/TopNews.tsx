import React from "react";
import { useHistory } from "react-router-dom";

import MoreButton from "../../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../../components/section-title/SectionTitle";
import "./TopNews.scss";

const TopNews: React.FC = () => {
  const history = useHistory();

  return (
    <div className="top-news">
      <SectionTitle titleLabel="TOP HEADLINES" />

      <div className="top-news__entities">
        <div className="top-news__entities__thumbnail top-news__entities__thumbnail--left">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Headlines}
            thumbnailData={{
              id: "top-headline-1",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "TOP HEADLINE 1",
            }}
          />
        </div>
        <div className="top-news__entities__thumbnail top-news__entities__thumbnail--right-top">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Headlines}
            thumbnailData={{
              id: "top-headline-2",
              imageUrl: "https://picsum.photos/id/1015/600/300",
              title: "TOP HEADLINE 2",
            }}
          />
        </div>
        <div className="top-news__entities__thumbnail top-news__entities__thumbnail--right-bottom">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Headlines}
            thumbnailData={{
              id: "top-headline-3",
              imageUrl: "https://picsum.photos/id/1015/600/300",
              title: "TOP HEADLINE 3",
            }}
          />
        </div>
      </div>

      <MoreButton buttonCallback={() => history.push("/top-news/headlines")} />
    </div>
  );
};

export default TopNews;
