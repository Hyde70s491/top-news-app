import healthReducer from "../HealthReducer";

describe("healthReducer test", () => {
  it("returns the initial state", () => {
    expect(healthReducer(undefined, { type: "" })).toEqual({
      entities: {},
    });
  });
});
