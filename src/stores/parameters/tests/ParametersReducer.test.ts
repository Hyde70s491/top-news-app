import { SET_CATEGORY, UPDATE_COUNTRY } from "../ParametersActions";
import parametersReducer from "../ParametersReducer";

describe("parametersReducer test", () => {
  it("returns the initial state", () => {
    expect(parametersReducer(undefined, { type: "" })).toEqual({
      category: null,
      country: "gb",
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
    });
  });

  it("handles UPDATE_COUNTRY action", () => {
    const countryId = "Test CountryId";

    expect(
      parametersReducer(undefined, { type: UPDATE_COUNTRY, payload: countryId })
    ).toEqual({
      category: null,
      country: countryId,
    });
  });
});
