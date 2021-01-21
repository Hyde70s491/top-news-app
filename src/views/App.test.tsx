import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import { render, screen } from "@testing-library/react";

import App from "./App";

import { testReducer } from "../stores/rootReducer";

const preloadedState: any = {
  test: {
    welcomeMessage: "Hello, Top News App!",
  },
};

const store = createStore(testReducer, preloadedState);

describe("<App /> test", () => {
  it("renders welcome message", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const welcomeMessage = screen.getByText(/Hello, Top News App!/i);

    expect(welcomeMessage).toBeInTheDocument();
  });
});
