import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import NewsThumbnail, { ThumbnailType } from "./NewsThumbnail";

describe("<NewsThumbnail /> test", () => {
  it("renders expected entities", () => {
    const thumbnailTypeProp = ThumbnailType.TopNews;
    const thumbnailDataProp = {
      id: "test-id",
      imageUrl: "https://test-url",
      subtitle: "Test Subtitle",
      title: "Test Title",
    };

    render(
      <MemoryRouter>
        <NewsThumbnail
          thumbnailType={thumbnailTypeProp}
          thumbnailData={thumbnailDataProp}
        />
      </MemoryRouter>
    );

    const thumbnailImage = screen.getByAltText(/news/i);
    expect(thumbnailImage).toBeInTheDocument();

    const expectedTitle = screen.getByText(/Test Title/i);
    expect(expectedTitle).toBeInTheDocument();

    const expectedSubtitle = screen.getByText(/Test Subtitle/i);
    expect(expectedSubtitle).toBeInTheDocument();
  });
});
