import React from "react";
import { NavLink } from "react-router-dom";

import "./NewsThumbnail.scss";

interface ThumbnailData {
  readonly id: string;
  readonly imageUrl?: string;
  readonly subtitle?: string;
  readonly title: string;
}

export enum ThumbnailType {
  Category = "category",
  Popular = "popular",
  Suggested = "suggested",
  Headlines = "headlines",
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

  return (
    <NavLink
      className={`news-thumbnail news-thumbnail--${thumbnailType}`}
      to={`/top-news/${thumbnailType}/${id}`}
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
