import { SET_CATEGORY, UPDATE_COUNTRY } from "../ParametersActions";
import { setCategory, updateCountry } from "../ParametersActions";

describe("ParametersActions test", () => {
  it("creates an action to set category parameter", () => {
    const categoryName = "Test Category";
    const expectedAction = {
      type: SET_CATEGORY,
      payload: categoryName,
    };

    expect(setCategory(categoryName)).toEqual(expectedAction);
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
