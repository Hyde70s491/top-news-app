import { ApiStatus } from "../../../models/NewsCategoryStateModel";
import sportsReducer from "../SportsReducer";

describe("sportsReducer test", () => {
  it("returns the initial state", () => {
    expect(sportsReducer(undefined, { type: "" })).toEqual({
      apiStatus: ApiStatus.Idle,
      entities: {},
    });
  });
});
