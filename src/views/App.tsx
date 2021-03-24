import React from "react";
import { useSelector } from "react-redux";

import AppHeader from "./layout/app-header/AppHeader";
import AppBody from "./layout/app-body/AppBody";
import SearchModal from "./components/search-modal/SearchModal";

import { ModalType } from "../stores/layout/LayoutModels";
import { selectActiveModal } from "../selectors/layout/LayoutSelector";
import "./App.scss";
import "../stylesheets/main.scss";

const App: React.FC = () => {
  const activeModal: ModalType | null = useSelector(selectActiveModal);

  const isSearchModalVisible: boolean = activeModal === ModalType.Search;

  return (
    <div className="app">
      <AppHeader />
      <AppBody />
      <SearchModal isVisible={isSearchModalVisible} />
    </div>
  );
};

export default App;
