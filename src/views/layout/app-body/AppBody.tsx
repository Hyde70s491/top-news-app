import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AdvertisingBanner from "./advertising-banner/AdvertisingBanner";
import AppFooter from "../app-footer/AppFooter";
import FormattedDate from "./formatted-date/FormattedDate";
import HomePage from "../../pages/home/Home";
import "./AppBody.scss";

const AppBody: React.FC = () => {
  return (
    <div className="app-body">
      <div className="app-body__top">
        <FormattedDate />
        <AdvertisingBanner />
      </div>
      <div className="app-body__content">
        <Switch>
          <Route exact path="/">
            <Redirect to="/top-news" />
          </Route>
          <Route path="/top-news">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <AppFooter />
    </div>
  );
};

export default AppBody;
