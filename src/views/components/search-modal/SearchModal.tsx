import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import MoreButton from "../../components/more-button/MoreButton";
import NewsThumbnail, {
  ThumbnailType,
} from "../../components/news-thumbnail/NewsThumbnail";
import SearchBar from "../search-bar/SearchBar";

import { NewsData } from "../../../selectors/news/NewsSelectorModels";
import { selectSearchedNews } from "../../../selectors/news/NewsSelectors";
import { toggleModal } from "../../../stores/layout/LayoutActions";
import "./SearchModal.scss";

interface SearchModalProps {
  readonly isVisible: boolean;
}

const SearchModal: React.FC<SearchModalProps> = (
  props: React.PropsWithChildren<SearchModalProps>
) => {
  const { isVisible } = props;

  const dispatch: Dispatch = useDispatch();

  const searchedNews: NewsData[] = useSelector(selectSearchedNews);

  const closeSearchModal = (): void => {
    dispatch(toggleModal(null));
  };

  return (
    <div className={`search-modal${isVisible ? " search-modal--visible" : ""}`}>
      <button className="search-modal__button" onClick={closeSearchModal}>
        <img
          className="search-modal__button__icon"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="close"
        />
      </button>

      <div className="search-modal__content">
        <SearchBar barClassName="search-bar--modal" />

        <div className="search-modal__entities">
          {searchedNews.map((news: NewsData) => (
            <div
              className="search-modal__entities__thumbnail"
              key={news.id}
              onClick={closeSearchModal}
            >
              <NewsThumbnail
                thumbnailType={ThumbnailType.Search}
                thumbnailData={news}
              />
            </div>
          ))}
        </div>

        <MoreButton
          buttonCallback={() => console.log("Show more search headlines!")}
        />
      </div>
    </div>
  );
};

export default SearchModal;
