import { combineReducers, Reducer } from "redux";

import layoutReducer from "./layout/LayoutReducer";
import parametersReducer from "./parameters/ParametersReducer";
import searchReducer from "./search/SearchReducer";

const rootReducer: Reducer = combineReducers({
  layout: layoutReducer,
  parameters: parametersReducer,
  search: searchReducer,
});

export default rootReducer;
