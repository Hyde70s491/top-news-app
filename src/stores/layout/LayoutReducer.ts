import { Reducer } from "redux";

import ActionModel from "../../models/ActionModel";
import { LayoutState } from "./LayoutModels";
import { initialState } from "./LayoutState";
import { TOGGLE_MODAL } from "./LayoutActions";

const layoutReducer: Reducer = (
  state: LayoutState = initialState,
  action: ActionModel<any>
): LayoutState => {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        ...state,
        activeModal: action.payload,
      };
    }
    default:
      return state;
  }
};

export default layoutReducer;
