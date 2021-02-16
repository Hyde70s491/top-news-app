import React from "react";

import AdvertisingBanner from "./advertising-banner/AdvertisingBanner";
import AppFooter from "../app-footer/AppFooter";
import DateFormatter from "./date-formatter/DateFormatter";
import "./AppBody.scss";

const AppBody: React.FC = () => {
  return (
    <div className="app-body">
      <div className="app-body__top">
        <DateFormatter />
        <AdvertisingBanner />
      </div>
      <AppFooter />
    </div>
  );
};

export default AppBody;
