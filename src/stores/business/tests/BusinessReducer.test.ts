import { ApiStatus } from "../../../models/NewsCategoryStateModel";
import businessReducer from "../BusinessReducer";

describe("businessReducer test", () => {
  it("returns the initial state", () => {
    expect(businessReducer(undefined, { type: "" })).toEqual({
      apiStatus: ApiStatus.Idle,
      entities: {},
    });
  });
});
