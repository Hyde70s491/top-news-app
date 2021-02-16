import React from "react";

import AdvertisingBanner from "./advertising-banner/AdvertisingBanner";
import AppFooter from "../app-footer/AppFooter";
import FormattedDate from "./formatted-date/FormattedDate";
import "./AppBody.scss";

const AppBody: React.FC = () => {
  return (
    <div className="app-body">
      <div className="app-body__top">
        <FormattedDate />
        <AdvertisingBanner />
      </div>
      <AppFooter />
    </div>
  );
};

export default AppBody;
