import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import NewsContent from "./NewsContent";
import rootStore from "../../../../stores/rootStore";
import { setNewsData } from "../../../../stores/parameters/ParametersActions";

describe("<NewsContent /> test", () => {
  it("renders expected entities", () => {
    const newsData = {
      author: "Test Author",
      category: "Test Category",
      id: "Test Id",
      imageUrl: "https://Test",
      subtitle: "Test Subtitle",
      text: "Test Text",
      title: "Test Title",
    };
    rootStore.dispatch(setNewsData(newsData));

    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <NewsContent />
        </MemoryRouter>
      </Provider>
    );

    const expectedTitle = screen.getByText(/Test Title/i);
    expect(expectedTitle).toBeInTheDocument();

    const expectedAuthor = screen.getByText(/Author: Test Author/i);
    expect(expectedAuthor).toBeInTheDocument();

    const newsImage = screen.getByAltText(/news/i);
    expect(newsImage).toBeInTheDocument();

    const expectedSubtitle = screen.getByText(/Test Subtitle/i);
    expect(expectedSubtitle).toBeInTheDocument();

    const expectedText = screen.getByText(/Test Text/i);
    expect(expectedText).toBeInTheDocument();

    // const facebookImage = screen.getByAltText(/facebook/i);
    // expect(facebookImage).toBeInTheDocument();

    // const twitterImage = screen.getByAltText(/twitter/i);
    // expect(twitterImage).toBeInTheDocument();

    // const emailImage = screen.getByAltText(/email/i);
    // expect(emailImage).toBeInTheDocument();

    // const linkImage = screen.getByAltText(/link/i);
    // expect(linkImage).toBeInTheDocument();
  });
});
