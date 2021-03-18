import { UPDATE_COUNTRY } from "../ParametersActions";
import parametersReducer from "../ParametersReducer";

describe("parametersReducer test", () => {
  it("returns the initial state", () => {
    expect(parametersReducer(undefined, { type: "" })).toEqual({
      country: "gb",
    });
  });

  it("handles UPDATE_COUNTRY action", () => {
    const countryId = "Test CountryId";

    expect(
      parametersReducer(undefined, { type: UPDATE_COUNTRY, payload: countryId })
    ).toEqual({
      country: countryId,
    });
  });
});
