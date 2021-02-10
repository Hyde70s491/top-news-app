import React from "react";

import AppHeader from "./layout/app-header/AppHeader";
import "./App.scss";
import "../stylesheets/main.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <AppHeader></AppHeader>
    </div>
  );
};

export default App;
