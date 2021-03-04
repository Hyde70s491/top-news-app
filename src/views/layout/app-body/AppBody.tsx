import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AdvertisingBanner from "./advertising-banner/AdvertisingBanner";
import AppFooter from "../app-footer/AppFooter";
import CategoryPage from "../../pages/category/Category";
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
          <Route exact path="/top-news" component={HomePage} />
          <Route exact path="/top-news/profile/:userId">
            User
          </Route>
          <Route exact path="/top-news/:categoryId" component={CategoryPage} />
          <Route exact path="/top-news/:categoryId/:newsId">
            News
          </Route>
          <Route exact path="/">
            <Redirect to="/top-news" />
          </Route>
        </Switch>
      </div>
      <AppFooter />
    </div>
  );
};

export default AppBody;
