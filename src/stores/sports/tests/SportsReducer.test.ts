import sportsReducer from "../SportsReducer";

describe("sportsReducer test", () => {
  it("returns the initial state", () => {
    expect(sportsReducer(undefined, { type: "" })).toEqual({
      entities: {},
    });
  });
});
