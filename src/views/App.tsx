import React from "react";

import AppHeader from "./layout/app-header/AppHeader";
import AppBody from "./layout/app-body/AppBody";
import SearchModal from "./components/search-modal/SearchModal";
import "./App.scss";
import "../stylesheets/main.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <AppHeader />
      <AppBody />
      <SearchModal isVisible={false} />
    </div>
  );
};

export default App;
