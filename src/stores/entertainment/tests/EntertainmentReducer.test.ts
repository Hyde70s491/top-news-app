import { ApiStatus } from "../../../models/NewsCategoryStateModel";
import entertainmentReducer from "../EntertainmentReducer";

describe("entertainmentReducer test", () => {
  it("returns the initial state", () => {
    expect(entertainmentReducer(undefined, { type: "" })).toEqual({
      apiStatus: ApiStatus.Idle,
      entities: {},
    });
  });
});
