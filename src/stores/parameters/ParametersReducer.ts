import { Action, Reducer } from "redux";

import { parametersState } from "./ParametersModels";
import { initialState } from "./ParametersState";

const parametersReducer: Reducer = (
  state: parametersState = initialState,
  action: Action
): parametersState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default parametersReducer;
