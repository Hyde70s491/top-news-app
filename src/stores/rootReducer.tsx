import { combineReducers, Reducer } from "redux";

import layoutReducer from "./layout/LayoutReducer";
import parametersReducer from "./parameters/ParametersReducer";

const rootReducer: Reducer = combineReducers({
  layout: layoutReducer,
  parameters: parametersReducer,
});

export default rootReducer;
