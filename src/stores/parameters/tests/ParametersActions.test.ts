import {
  SET_CATEGORY,
  SET_NEWS_DATA,
  UPDATE_COUNTRY,
} from "../ParametersActions";
import { setCategory, setNewsData, updateCountry } from "../ParametersActions";

describe("ParametersActions test", () => {
  it("creates an action to set category parameter", () => {
    const categoryName = "Test Category";
    const expectedAction = {
      type: SET_CATEGORY,
      payload: categoryName,
    };

    expect(setCategory(categoryName)).toEqual(expectedAction);
  });

  it("creates an action to set newsData parameter", () => {
    const newsData = {
      author: "Test Author",
      category: "Test Category",
      id: "Test Id",
      imageUrl: "https://Test",
      subtitle: "Test Subtitle",
      text: "Test Text",
      title: "Test Title",
    };
    const expectedAction = {
      type: SET_NEWS_DATA,
      payload: newsData,
    };

    expect(setNewsData(newsData)).toEqual(expectedAction);
  });

  it("creates an action to update country parameter", () => {
    const countryId = "Test Id";
    const expectedAction = {
      type: UPDATE_COUNTRY,
      payload: countryId,
    };

    expect(updateCountry(countryId)).toEqual(expectedAction);
  });
});
