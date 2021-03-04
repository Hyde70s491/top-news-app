import React from "react";
import { useHistory } from "react-router-dom";

import MoreButton from "../../../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../../../components/section-title/SectionTitle";
import "./SuggestedNews.scss";

const SuggestedNews: React.FC = () => {
  const history = useHistory();

  return (
    <div className="suggested-news">
      <SectionTitle titleLabel="SUGGESTED" />

      <div className="suggested-news__entities">
        <div className="suggested-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Suggested}
            thumbnailData={{
              id: "suggested-headline-1",
              title: "SUGGESTED HEADLINE 1",
            }}
          />
        </div>
        <div className="suggested-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Suggested}
            thumbnailData={{
              id: "suggested-headline-2",
              title: "SUGGESTED HEADLINE 2",
            }}
          />
        </div>
        <div className="suggested-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Suggested}
            thumbnailData={{
              id: "suggested-headline-3",
              title: "SUGGESTED HEADLINE 3",
            }}
          />
        </div>
        <div className="suggested-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Suggested}
            thumbnailData={{
              id: "suggested-headline-4",
              title: "SUGGESTED HEADLINE 4",
            }}
          />
        </div>
        <div className="suggested-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Suggested}
            thumbnailData={{
              id: "suggested-headline-5",
              title: "SUGGESTED HEADLINE 5",
            }}
          />
        </div>
        <div className="suggested-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Suggested}
            thumbnailData={{
              id: "suggested-headline-6",
              title: "SUGGESTED HEADLINE 6",
            }}
          />
        </div>
      </div>

      <MoreButton buttonCallback={() => history.push("/top-news/suggested")} />
    </div>
  );
};

export default SuggestedNews;
