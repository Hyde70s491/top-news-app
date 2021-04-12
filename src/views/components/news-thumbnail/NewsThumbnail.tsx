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
  const { category, id, imageUrl, subtitle, title } = thumbnailData;

  const location = useLocation();
  const [thumbnailRoute, setThumbnailRoute] = useState<string>("");

  useEffect(() => {
    const routeFragments = location.pathname.split("/");

    if (routeFragments.length === 4) {
      setThumbnailRoute(`/${routeFragments[1]}/${routeFragments[2]}/${id}`);
    } else if (location.pathname === "/top-news") {
      setThumbnailRoute(`${location.pathname}/${category}/${id}`);
    } else {
      setThumbnailRoute(`${location.pathname}/${id}`);
    }
  }, [category, id, location]);

  const handleThumbnailClick = (): void => {
    sessionStorage.setItem("newsData", JSON.stringify(thumbnailData));
  };

  return (
    <NavLink
      className={`news-thumbnail news-thumbnail--${thumbnailType}`}
      to={thumbnailRoute}
      onClick={handleThumbnailClick}
    >
      {imageUrl && (
        <img className="news-thumbnail__image" src={imageUrl} alt="news" />
      )}
      <span className="news-thumbnail__title">{title}</span>
      {subtitle && <span className="news-thumbnail__subtitle">{subtitle}</span>}
    </NavLink>
  );
};

export default NewsThumbnail;
