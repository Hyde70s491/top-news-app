import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./NewsThumbnail.scss";

interface ThumbnailData {
  readonly category: string;
  readonly id: string;
  readonly imageUrl?: string;
  readonly subtitle?: string;
  readonly title?: string;
}

export enum ThumbnailType {
  Category = "category",
  CategoryDetails = "category-details",
  Headlines = "headlines",
  Popular = "popular",
  Search = "search",
  Similar = "similar",
  Suggested = "suggested",
}

interface NewsThumbnailProps {
  readonly thumbnailData: ThumbnailData;
  readonly thumbnailType: ThumbnailType;
}

const NewsThumbnail: React.FC<NewsThumbnailProps> = (
  props: React.PropsWithChildren<NewsThumbnailProps>
) => {
  const { thumbnailData, thumbnailType } = props;

  const location = useLocation();
  const [thumbnailRoute, setThumbnailRoute] = useState<string>("");

  useEffect(() => {
    const routeFragments = location.pathname.split("/");

    if (routeFragments.length === 4) {
      setThumbnailRoute(
        `/${routeFragments[1]}/${routeFragments[2]}/${thumbnailData?.id}`
      );
    } else if (location.pathname === "/top-news") {
      setThumbnailRoute(
        `${location.pathname}/${thumbnailData?.category}/${thumbnailData?.id}`
      );
    } else {
      setThumbnailRoute(`${location.pathname}/${thumbnailData?.id}`);
    }
  }, [location, thumbnailData]);

  const handleThumbnailClick = (): void => {
    sessionStorage.setItem("newsData", JSON.stringify(thumbnailData));
  };

  return (
    <NavLink
      className={`news-thumbnail news-thumbnail--${thumbnailType}`}
      to={thumbnailRoute}
      onClick={handleThumbnailClick}
    >
      {thumbnailData?.imageUrl && (
        <img
          className="news-thumbnail__image"
          src={thumbnailData?.imageUrl}
          alt="news"
        />
      )}
      <span className="news-thumbnail__title">{thumbnailData?.title}</span>
      {thumbnailData?.subtitle && (
        <span className="news-thumbnail__subtitle">
          {thumbnailData?.subtitle}
        </span>
      )}
    </NavLink>
  );
};

export default NewsThumbnail;
