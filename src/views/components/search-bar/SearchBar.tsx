import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { ModalType } from "../../../stores/layout/LayoutModels";
import { selectActiveModal } from "../../../selectors/layout/LayoutSelector";
import { toggleModal } from "../../../stores/layout/LayoutActions";
import "./SearchBar.scss";

interface SearchBarProps {
  readonly barClassName?: string;
}

const SearchBar: React.FC<SearchBarProps> = (
  props: React.PropsWithChildren<SearchBarProps>
) => {
  const { barClassName } = props;

  const dispatch: Dispatch = useDispatch();
  const activeModal: ModalType | null = useSelector(selectActiveModal);

  const handleSearchBarClick = (): void => {
    if (!activeModal) dispatch(toggleModal(ModalType.Search));
  };

  return (
    <div
      className={`search-bar${barClassName ? " " + barClassName : ""}`}
      onClick={handleSearchBarClick}
    >
      <input className="search-bar__query" placeholder="Search..." />
      <button className="search-bar__button">
        <img
          className="search-bar__button__icon"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="search"
        />
      </button>
    </div>
  );
};

export default SearchBar;
