import { combineReducers, Reducer } from "redux";

import businessReducer from "./business/BusinessReducer";
import entertainmentReducer from "./entertainment/EntertainmentReducer";
import generalReducer from "./general/GeneralReducer";
import headlinesReducer from "./headlines/HeadlinesReducer";
import healthReducer from "./health/HealthReducer";
import layoutReducer from "./layout/LayoutReducer";
import parametersReducer from "./parameters/ParametersReducer";
import searchReducer from "./search/SearchReducer";

const rootReducer: Reducer = combineReducers({
  business: businessReducer,
  entertainment: entertainmentReducer,
  general: generalReducer,
  headlines: headlinesReducer,
  health: healthReducer,
  layout: layoutReducer,
  parameters: parametersReducer,
  search: searchReducer,
});

export default rootReducer;
