import React from "react";

import MoreButton from "../../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../../components/section-title/SectionTitle";
import "./NewsByCategory.scss";

const NewsByCategory: React.FC = () => {
  return (
    <div className="news-by-category">
      <SectionTitle titleLabel="CATEGORY" />

      <div className="news-by-category__entities">
        <div className="news-by-category__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.NewsByCategory}
            thumbnailData={{
              id: "news-by-category-1",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "NEWS BY CATEGORY HEADLINE 1",
            }}
          />
        </div>
        <div className="news-by-category__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.NewsByCategory}
            thumbnailData={{
              id: "news-by-category-2",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "NEWS BY CATEGORY HEADLINE 2",
            }}
          />
        </div>
        <div className="news-by-category__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.NewsByCategory}
            thumbnailData={{
              id: "news-by-category-3",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "NEWS BY CATEGORY HEADLINE 3",
            }}
          />
        </div>
        <div className="news-by-category__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.NewsByCategory}
            thumbnailData={{
              id: "news-by-category-4",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "NEWS BY CATEGORY HEADLINE 4",
            }}
          />
        </div>
      </div>

      <MoreButton />
    </div>
  );
};

export default NewsByCategory;
