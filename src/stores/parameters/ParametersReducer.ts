import { Reducer } from "redux";

import ActionModel from "../../models/ActionModel";
import { ParametersState } from "./ParametersModels";
import { initialState } from "./ParametersState";
import {
  SET_CATEGORY,
  SET_NEWS_DATA,
  UPDATE_COUNTRY,
} from "./ParametersActions";

const parametersReducer: Reducer = (
  state: ParametersState = initialState,
  action: ActionModel<any>
): ParametersState => {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    case SET_CATEGORY: {
      return {
        ...state,
        category: action.payload,
      };
    }
    case SET_NEWS_DATA: {
      return {
        ...state,
        newsData: action.payload,
      };
    }
    case UPDATE_COUNTRY: {
      return {
        ...state,
        country: action.payload,
      };
    }
    default:
      return state;
  }
};

export default parametersReducer;
