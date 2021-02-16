import React from "react";

import "./SectionTitle.scss";

interface SectionTitleProps {
  readonly titleLabel: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (
  props: React.PropsWithChildren<SectionTitleProps>
) => {
  const { titleLabel } = props;

  return <div className="section-title">{titleLabel}</div>;
};

export default SectionTitle;
