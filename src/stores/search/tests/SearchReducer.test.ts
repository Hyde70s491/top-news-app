import { ApiStatus } from "../../../models/NewsCategoryStateModel";
import searchReducer from "../SearchReducer";

describe("searchReducer test", () => {
  it("returns the initial state", () => {
    expect(searchReducer(undefined, { type: "" })).toEqual({
      apiStatus: ApiStatus.Idle,
      entities: {},
    });
  });
});
