import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import "./NewsThumbnail.scss";

interface ThumbnailData {
  readonly id: string;
  readonly imageUrl?: string;
  readonly subtitle?: string;
  readonly text?: string;
  readonly title: string;
}

export enum ThumbnailType {
  TopNews = "news-thumbnail--top-news",
}

interface NewsThumbnailProps {
  readonly thumbnailData: ThumbnailData;
  readonly thumbnailType: ThumbnailType;
}

const NewsThumbnail: React.FC<NewsThumbnailProps> = (
  props: React.PropsWithChildren<NewsThumbnailProps>
) => {
  const { thumbnailData, thumbnailType } = props;
  const { id, imageUrl, subtitle, text, title } = thumbnailData;
  const match = useRouteMatch();

  return (
    <NavLink
      className={`news-thumbnail ${thumbnailType}`}
      to={`${match.path}/${id}`}
    >
      {imageUrl && (
        <img className="news-thumbnail__image" src={imageUrl} alt="news" />
      )}
      <span className="news-thumbnail__title">{title}</span>
      {subtitle && <span className="news-thumbnail__subtitle">{subtitle}</span>}
      {text && <span className="news-thumbnail__text">{text}</span>}
    </NavLink>
  );
};

export default NewsThumbnail;
