import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import CategoryLinks from "./CategoryLinks";
import rootStore from "../../../stores/rootStore";

describe("<CategoryLinks /> test", () => {
  it("renders expected entities", () => {
    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <CategoryLinks />
        </MemoryRouter>
      </Provider>
    );

    const categoryLink1 = screen.getByText(/Business/i);
    expect(categoryLink1).toBeInTheDocument();

    const categoryLink2 = screen.getByText(/Entertainment/i);
    expect(categoryLink2).toBeInTheDocument();

    const categoryLink3 = screen.getByText(/General/i);
    expect(categoryLink3).toBeInTheDocument();

    const categoryLink4 = screen.getByText(/Health/i);
    expect(categoryLink4).toBeInTheDocument();

    const categoryLink5 = screen.getByText(/Science/i);
    expect(categoryLink5).toBeInTheDocument();

    const categoryLink6 = screen.getByText(/Sports/i);
    expect(categoryLink6).toBeInTheDocument();

    const categoryLink7 = screen.getByText(/Technology/i);
    expect(categoryLink7).toBeInTheDocument();
  });
});
