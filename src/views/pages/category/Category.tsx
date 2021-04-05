import React from "react";

import MoreButton from "../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../components/news-thumbnail/NewsThumbnail";
import SectionTitle from "../../components/section-title/SectionTitle";
import "./Category.scss";

const Category: React.FC = () => {
  return (
    <div className="category-page">
      <SectionTitle titleLabel="DUMMY CATEGORY" />

      <div className="category-page__entities">
        <div className="category-page__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.CategoryDetails}
            thumbnailData={{
              category: "dummy",
              id: "dummy-category-headline-1",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "DUMMY CATEGORY HEADLINE 1",
              subtitle: "Subtitle of dummy category headline 1",
            }}
          />
        </div>
        <div className="category-page__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.CategoryDetails}
            thumbnailData={{
              category: "dummy",
              id: "dummy-category-headline-2",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "DUMMY CATEGORY HEADLINE 2",
              subtitle: "Subtitle of dummy category headline 2",
            }}
          />
        </div>
        <div className="category-page__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.CategoryDetails}
            thumbnailData={{
              category: "dummy",
              id: "dummy-category-headline-3",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "DUMMY CATEGORY HEADLINE 3",
              subtitle: "Subtitle of dummy category headline 3",
            }}
          />
        </div>
        <div className="category-page__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.CategoryDetails}
            thumbnailData={{
              category: "dummy",
              id: "dummy-category-headline-4",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "DUMMY CATEGORY HEADLINE 4",
              subtitle: "Subtitle of dummy category headline 4",
            }}
          />
        </div>
        <div className="category-page__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.CategoryDetails}
            thumbnailData={{
              category: "dummy",
              id: "dummy-category-headline-5",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "DUMMY CATEGORY HEADLINE 5",
              subtitle: "Subtitle of dummy category headline 5",
            }}
          />
        </div>
        <div className="category-page__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.CategoryDetails}
            thumbnailData={{
              category: "dummy",
              id: "dummy-category-headline-6",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "DUMMY CATEGORY HEADLINE 6",
              subtitle: "Subtitle of dummy category headline 6",
            }}
          />
        </div>
        <div className="category-page__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.CategoryDetails}
            thumbnailData={{
              category: "dummy",
              id: "dummy-category-headline-7",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "DUMMY CATEGORY HEADLINE 7",
              subtitle: "Subtitle of dummy category headline 7",
            }}
          />
        </div>
        <div className="category-page__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.CategoryDetails}
            thumbnailData={{
              category: "dummy",
              id: "dummy-category-headline-8",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "DUMMY CATEGORY HEADLINE 8",
              subtitle: "Subtitle of dummy category headline 8",
            }}
          />
        </div>
        <div className="category-page__entities__thumbnail">
          <NewsThumbnail
            thumbnailType={ThumbnailType.CategoryDetails}
            thumbnailData={{
              category: "dummy",
              id: "dummy-category-headline-9",
              imageUrl: "https://picsum.photos/id/1015/600/600",
              title: "DUMMY CATEGORY HEADLINE 9",
              subtitle: "Subtitle of dummy category headline 9",
            }}
          />
        </div>
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
