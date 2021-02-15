import React from "react";

import AppHeader from "./layout/app-header/AppHeader";
import AppBody from "./layout/app-body/AppBody";
import "./App.scss";
import "../stylesheets/main.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <AppHeader></AppHeader>
      <AppBody></AppBody>
    </div>
  );
};

export default App;
