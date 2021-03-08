import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./NewsThumbnail.scss";

interface ThumbnailData {
  readonly id: string;
  readonly imageUrl?: string;
  readonly subtitle?: string;
  readonly title: string;
}

export enum ThumbnailType {
  Category = "category",
  DummyCategory = "dummy-category",
  Headlines = "headlines",
  Popular = "popular",
  Search = "search",
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
  const { id, imageUrl, subtitle, title } = thumbnailData;
  const location = useLocation();

  const [thumbnailRoute, setThumbnailRoute] = useState("");

  useEffect(() => {
    if (location.pathname === "/top-news") {
      setThumbnailRoute(`${location.pathname}/${thumbnailType}/${id}`);
    } else {
      setThumbnailRoute(`${location.pathname}/${id}`);
    }
  }, [id, location, thumbnailType]);

  return (
    <NavLink
      className={`news-thumbnail news-thumbnail--${thumbnailType}`}
      to={thumbnailRoute}
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
