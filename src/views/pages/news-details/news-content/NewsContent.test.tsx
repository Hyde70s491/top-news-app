import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import NewsContent from "./NewsContent";

describe("<NewsContent /> test", () => {
  it("renders expected entities", () => {
    render(
      <MemoryRouter>
        <NewsContent />
      </MemoryRouter>
    );

    const expectedTitle = screen.getByText(/NEWS DETAILS TITLE/i);
    expect(expectedTitle).toBeInTheDocument();

    const expectedAuthor = screen.getByText(/Author: Firstname Lastname/i);
    expect(expectedAuthor).toBeInTheDocument();

    const newsImage = screen.getByAltText(/news/i);
    expect(newsImage).toBeInTheDocument();

    const expectedSubtitle = screen.getByText(/NEWS DETAILS SUBTITLE/i);
    expect(expectedSubtitle).toBeInTheDocument();

    const expectedText = screen.getByText(/News Details Text/i);
    expect(expectedText).toBeInTheDocument();

    const facebookImage = screen.getByAltText(/facebook/i);
    expect(facebookImage).toBeInTheDocument();

    const twitterImage = screen.getByAltText(/twitter/i);
    expect(twitterImage).toBeInTheDocument();

    const emailImage = screen.getByAltText(/email/i);
    expect(emailImage).toBeInTheDocument();

    const linkImage = screen.getByAltText(/link/i);
    expect(linkImage).toBeInTheDocument();
  });
});
