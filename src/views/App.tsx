import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import "../stylesheets/main.scss";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="app">Hello, Top News App!</div>
      </Route>
    </Switch>
  );
}

export default App;
