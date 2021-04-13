import {
  SET_CATEGORY,
  SET_NEWS_DATA,
  UPDATE_COUNTRY,
} from "../ParametersActions";
import parametersReducer from "../ParametersReducer";

describe("parametersReducer test", () => {
  it("returns the initial state", () => {
    expect(parametersReducer(undefined, { type: "" })).toEqual({
      category: null,
      country: "gb",
      newsData: null,
    });
  });

  it("handles SET_CATEGORY action", () => {
    const categoryName = "Test Category";

    expect(
      parametersReducer(undefined, {
        type: SET_CATEGORY,
        payload: categoryName,
      })
    ).toEqual({
      category: categoryName,
      country: "gb",
      newsData: null,
    });
  });

  it("handles SET_NEWS_DATA action", () => {
    const newsData = {
      author: "Test Author",
      category: "Test Category",
      id: "Test Id",
      imageUrl: "https://Test",
      subtitle: "Test Subtitle",
      text: "Test Text",
      title: "Test Title",
    };

    expect(
      parametersReducer(undefined, {
        type: SET_NEWS_DATA,
        payload: newsData,
      })
    ).toEqual({
      category: null,
      country: "gb",
      newsData,
    });
  });

  it("handles UPDATE_COUNTRY action", () => {
    const countryId = "Test CountryId";

    expect(
      parametersReducer(undefined, { type: UPDATE_COUNTRY, payload: countryId })
    ).toEqual({
      category: null,
      country: countryId,
      newsData: null,
    });
  });
});
