import { Reducer } from "redux";

import ActionModel from "../../models/ActionModel";
import { ParametersState } from "./ParametersModels";
import { initialState } from "./ParametersState";
import { UPDATE_COUNTRY, ParametersActionTypes } from "./ParametersActions";

const parametersReducer: Reducer = (
  state: ParametersState = initialState,
  action: ActionModel<ParametersActionTypes>
): ParametersState => {
  switch (action.type) {
    case UPDATE_COUNTRY: {
      return {
        ...state,
        country: action.payload!,
      };
    }
    default:
      return state;
  }
};

export default parametersReducer;
