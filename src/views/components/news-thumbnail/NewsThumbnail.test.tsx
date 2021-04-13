import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import NewsThumbnail, { ThumbnailType } from "./NewsThumbnail";
import rootStore from "../../../stores/rootStore";

describe("<NewsThumbnail /> test", () => {
  it("renders expected entities", () => {
    const thumbnailTypeProp = ThumbnailType.Headlines;
    const thumbnailDataProp = {
      category: "test category",
      id: "test-id",
      imageUrl: "https://test-url",
      subtitle: "Test Subtitle",
      title: "Test Title",
    };

    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <NewsThumbnail
            thumbnailType={thumbnailTypeProp}
            thumbnailData={thumbnailDataProp}
          />
        </MemoryRouter>
      </Provider>
    );

    const thumbnailImage = screen.getByAltText(/news/i);
    expect(thumbnailImage).toBeInTheDocument();

    const expectedTitle = screen.getByText(/Test Title/i);
    expect(expectedTitle).toBeInTheDocument();

    const expectedSubtitle = screen.getByText(/Test Subtitle/i);
    expect(expectedSubtitle).toBeInTheDocument();
  });
});
