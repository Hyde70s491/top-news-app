import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import "../stylesheets/main.scss";

import { selectWelcomeMessage } from "../stores/rootReducer";

const App: React.FC = () => {
  const welcomeMessage: string = useSelector(selectWelcomeMessage);

  return (
    <Switch>
      <Route exact path="/">
        <div className="app">{welcomeMessage}</div>
      </Route>
    </Switch>
  );
};

export default App;
