import React from "react";

import MoreButton from "../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../components/news-thumbnail/NewsThumbnail";
import SearchBar from "../search-bar/SearchBar";
import "./SearchModal.scss";

interface SearchModalProps {
  readonly isVisible: boolean;
}

const SearchModal: React.FC<SearchModalProps> = (
  props: React.PropsWithChildren<SearchModalProps>
) => {
  const { isVisible } = props;

  return (
    <div className={`search-modal${isVisible ? " search-modal--visible" : ""}`}>
      <div className="search-modal__content">
        <SearchBar barClassName="search-bar--modal" />

        <div className="search-modal__entities">
          <div className="search-modal__entities__thumbnail">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Search}
              thumbnailData={{
                id: "search-headline-1",
                imageUrl: "https://picsum.photos/id/1015/600/600",
                title: "SEARCH HEADLINE 1",
                subtitle: "Subtitle of search headline 1",
              }}
            />
          </div>
          <div className="search-modal__entities__thumbnail">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Search}
              thumbnailData={{
                id: "search-headline-2",
                imageUrl: "https://picsum.photos/id/1015/600/600",
                title: "SEARCH HEADLINE 2",
                subtitle: "Subtitle of search headline 2",
              }}
            />
          </div>
          <div className="search-modal__entities__thumbnail">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Search}
              thumbnailData={{
                id: "search-headline-3",
                imageUrl: "https://picsum.photos/id/1015/600/600",
                title: "SEARCH HEADLINE 3",
                subtitle: "Subtitle of search headline 3",
              }}
            />
          </div>
          <div className="search-modal__entities__thumbnail">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Search}
              thumbnailData={{
                id: "search-headline-4",
                imageUrl: "https://picsum.photos/id/1015/600/600",
                title: "SEARCH HEADLINE 4",
                subtitle: "Subtitle of search headline 4",
              }}
            />
          </div>
          <div className="search-modal__entities__thumbnail">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Search}
              thumbnailData={{
                id: "search-headline-5",
                imageUrl: "https://picsum.photos/id/1015/600/600",
                title: "SEARCH HEADLINE 5",
                subtitle: "Subtitle of search headline 5",
              }}
            />
          </div>
          <div className="search-modal__entities__thumbnail">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Search}
              thumbnailData={{
                id: "search-headline-6",
                imageUrl: "https://picsum.photos/id/1015/600/600",
                title: "SEARCH HEADLINE 6",
                subtitle: "Subtitle of search headline 6",
              }}
            />
          </div>
          <div className="search-modal__entities__thumbnail">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Search}
              thumbnailData={{
                id: "search-headline-7",
                imageUrl: "https://picsum.photos/id/1015/600/600",
                title: "SEARCH HEADLINE 7",
                subtitle: "Subtitle of search headline 7",
              }}
            />
          </div>
          <div className="search-modal__entities__thumbnail">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Search}
              thumbnailData={{
                id: "search-headline-8",
                imageUrl: "https://picsum.photos/id/1015/600/600",
                title: "SEARCH HEADLINE 8",
                subtitle: "Subtitle of search headline 8",
              }}
            />
          </div>
          <div className="search-modal__entities__thumbnail">
            <NewsThumbnail
              thumbnailType={ThumbnailType.Search}
              thumbnailData={{
                id: "search-headline-9",
                imageUrl: "https://picsum.photos/id/1015/600/600",
                title: "SEARCH HEADLINE 9",
                subtitle: "Subtitle of search headline 9",
              }}
            />
          </div>
        </div>

        <MoreButton
          buttonCallback={() => console.log("Show more search headlines!")}
        />
      </div>
    </div>
  );
};

export default SearchModal;
