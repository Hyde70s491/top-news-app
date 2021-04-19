import { ApiStatus } from "../../../models/NewsCategoryStateModel";
import headlinesReducer from "../HeadlinesReducer";

describe("headlinesReducer test", () => {
  it("returns the initial state", () => {
    expect(headlinesReducer(undefined, { type: "" })).toEqual({
      apiStatus: ApiStatus.Idle,
      entities: {},
    });
  });
});
