import React from "react";

import { ApiStatus } from "../../../models/NewsCategoryStateModel";
import "./StatusIndicator.scss";

interface StatusIndicatorProps {
  readonly apiStatus: ApiStatus;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = (
  props: React.PropsWithChildren<StatusIndicatorProps>
) => {
  const { apiStatus } = props;

  if (apiStatus === ApiStatus.Succeeded) {
    return null;
  }

  return (
    <div className="status-indicator">
      {apiStatus !== ApiStatus.Failed
        ? "Loading news..."
        : "Something went wrong..."}
    </div>
  );
};

export default StatusIndicator;
