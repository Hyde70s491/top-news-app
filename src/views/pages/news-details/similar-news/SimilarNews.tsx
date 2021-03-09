import React from "react";
import { useHistory } from "react-router-dom";

import MoreButton from "../../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../../components/section-title/SectionTitle";
import "./SimilarNews.scss";

const SimilarNews: React.FC = () => {
  const history = useHistory();

  return (
    <div className="similar-news">
      <SectionTitle titleLabel="SIMILAR NEWS" />

      <div className="similar-news__entities">
        <div className="similar-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Similar}
            thumbnailData={{
              id: "similar-news-1",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "SIMILAR NEWS HEADLINE 1",
            }}
          />
        </div>
        <div className="similar-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Similar}
            thumbnailData={{
              id: "similar-news-2",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "SIMILAR NEWS HEADLINE 2",
            }}
          />
        </div>
        <div className="similar-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Similar}
            thumbnailData={{
              id: "similar-news-3",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "SIMILAR NEWS HEADLINE 3",
            }}
          />
        </div>
        <div className="similar-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Similar}
            thumbnailData={{
              id: "similar-news-4",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "SIMILAR NEWS HEADLINE 4",
            }}
          />
        </div>
      </div>

      <MoreButton buttonCallback={() => history.push("/top-news/category")} />
    </div>
  );
};

export default SimilarNews;
