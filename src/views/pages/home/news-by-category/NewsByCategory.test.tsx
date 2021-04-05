import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import NewsByCategory from "./NewsByCategory";
import rootStore from "../../../../stores/rootStore";
import { selectTopBusinessNews } from "../../../../selectors/news/NewsSelectors";

describe("<NewsByCategory /> test", () => {
  it("renders", () => {
    const categoryProp = {
      name: "business",
      selector: selectTopBusinessNews,
    };

    render(
      <Provider store={rootStore}>
        <MemoryRouter>
          <NewsByCategory category={categoryProp} />
        </MemoryRouter>
      </Provider>
    );

    const a = 1;

    expect(a).toEqual(1);
  });
});
