import { ApiStatus } from "../../../models/NewsCategoryStateModel";
import generalReducer from "../GeneralReducer";

describe("generalReducer test", () => {
  it("returns the initial state", () => {
    expect(generalReducer(undefined, { type: "" })).toEqual({
      apiStatus: ApiStatus.Idle,
      entities: {},
    });
  });
});
