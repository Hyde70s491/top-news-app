import { ApiStatus } from "../../../models/NewsCategoryStateModel";
import technologyReducer from "../TechnologyReducer";

describe("technologyReducer test", () => {
  it("returns the initial state", () => {
    expect(technologyReducer(undefined, { type: "" })).toEqual({
      apiStatus: ApiStatus.Idle,
      entities: {},
    });
  });
});
