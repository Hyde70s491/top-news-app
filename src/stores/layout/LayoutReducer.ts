import { Reducer } from "redux";

import ActionModel from "../../models/ActionModel";
import { LayoutState } from "./LayoutModels";
import { initialState } from "./LayoutState";

const layoutReducer: Reducer = (
  state: LayoutState = initialState,
  action: ActionModel<undefined>
): LayoutState => {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    default:
      return state;
  }
};

export default layoutReducer;
