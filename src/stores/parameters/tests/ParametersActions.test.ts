import { UPDATE_COUNTRY } from "../ParametersActions";
import { updateCountry } from "../ParametersActions";

describe("ParametersActions test", () => {
  it("creates an action to update country parameter", () => {
    const countryId = "Test Id";
    const expectedAction = {
      type: UPDATE_COUNTRY,
      payload: countryId,
    };

    expect(updateCountry(countryId)).toEqual(expectedAction);
  });
});
