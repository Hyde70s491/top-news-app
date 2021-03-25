import { ModalType } from "../LayoutModels";
import { TOGGLE_MODAL } from "../LayoutActions";
import { toggleModal } from "../LayoutActions";

describe("LayoutActions test", () => {
  it("creates an action to toggle search modal", () => {
    const param = ModalType.Search;
    const expectedAction = {
      type: TOGGLE_MODAL,
      payload: param,
    };

    expect(toggleModal(param)).toEqual(expectedAction);
  });
});
