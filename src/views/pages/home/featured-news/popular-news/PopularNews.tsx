import React from "react";
import { useHistory } from "react-router-dom";

import MoreButton from "../../../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../../../components/section-title/SectionTitle";
import "./PopularNews.scss";

const PopularNews: React.FC = () => {
  const history = useHistory();

  return (
    <div className="popular-news">
      <SectionTitle titleLabel="POPULAR" />

      <div className="popular-news__entities">
        <div className="popular-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Popular}
            thumbnailData={{
              id: "popular-headline-1",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "POPULAR HEADLINE 1",
              subtitle: "Subtitle of popular headline 1",
            }}
          />
        </div>
        <div className="popular-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Popular}
            thumbnailData={{
              id: "popular-headline-2",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "POPULAR HEADLINE 2",
              subtitle: "Subtitle of popular headline 2",
            }}
          />
        </div>
        <div className="popular-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Popular}
            thumbnailData={{
              id: "popular-headline-3",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "POPULAR HEADLINE 3",
              subtitle: "Subtitle of popular headline 3",
            }}
          />
        </div>
        <div className="popular-news__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.Popular}
            thumbnailData={{
              id: "popular-headline-4",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "POPULAR HEADLINE 4",
              subtitle: "Subtitle of popular headline 4",
            }}
          />
        </div>
      </div>

      <MoreButton buttonCallback={() => history.push("/top-news/popular")} />
    </div>
  );
};

export default PopularNews;
