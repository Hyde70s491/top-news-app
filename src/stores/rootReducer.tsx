import { combineReducers, Reducer } from "redux";

import parametersReducer from "./parameters/ParametersReducer";

const rootReducer: Reducer = combineReducers({
  parameters: parametersReducer,
});

export default rootReducer;
