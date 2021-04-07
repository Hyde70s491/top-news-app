import { combineReducers, Reducer } from "redux";

import businessReducer from "./business/BusinessReducer";
import entertainmentReducer from "./entertainment/EntertainmentReducer";
import generalReducer from "./general/GeneralReducer";
import headlinesReducer from "./headlines/HeadlinesReducer";
import healthReducer from "./health/HealthReducer";
import layoutReducer from "./layout/LayoutReducer";
import parametersReducer from "./parameters/ParametersReducer";
import scienceReducer from "./science/ScienceReducer";
import searchReducer from "./search/SearchReducer";
import sportsReducer from "./sports/SportsReducer";
import technologyReducer from "./technology/TechnologyReducer";

const rootReducer: Reducer = combineReducers({
  business: businessReducer,
  entertainment: entertainmentReducer,
  general: generalReducer,
  headlines: headlinesReducer,
  health: healthReducer,
  layout: layoutReducer,
  parameters: parametersReducer,
  science: scienceReducer,
  search: searchReducer,
  sports: sportsReducer,
  technology: technologyReducer,
});

export default rootReducer;
