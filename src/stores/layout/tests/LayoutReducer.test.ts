import { ModalType } from "../LayoutModels";
import { TOGGLE_MODAL } from "../LayoutActions";
import layoutReducer from "../LayoutReducer";

describe("layoutReducer test", () => {
  it("returns the initial state", () => {
    expect(layoutReducer(undefined, { type: "" })).toEqual({
      activeModal: null,
    });
  });

  it("handles TOGGLE_MODAL action", () => {
    const param = ModalType.Search;

    expect(
      layoutReducer(undefined, { type: TOGGLE_MODAL, payload: param })
    ).toEqual({
      activeModal: param,
    });
  });
});
