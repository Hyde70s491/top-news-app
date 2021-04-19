import { ApiStatus } from "../../../models/NewsCategoryStateModel";
import scienceReducer from "../ScienceReducer";

describe("scienceReducer test", () => {
  it("returns the initial state", () => {
    expect(scienceReducer(undefined, { type: "" })).toEqual({
      apiStatus: ApiStatus.Idle,
      entities: {},
    });
  });
});
