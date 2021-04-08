import { Reducer } from "redux";

import ActionModel from "../../models/ActionModel";
import { ParametersState } from "./ParametersModels";
import { initialState } from "./ParametersState";
import {
  SET_CATEGORY,
  UPDATE_COUNTRY,
  ParametersActionTypes,
} from "./ParametersActions";

const parametersReducer: Reducer = (
  state: ParametersState = initialState,
  action: ActionModel<ParametersActionTypes>
): ParametersState => {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case SET_CATEGORY: {
      return {
        ...state,
        category: action.payload!,
      };
    }
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
