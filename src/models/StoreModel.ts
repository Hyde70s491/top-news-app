import NewsCategoryStateModel from "./NewsCategoryStateModel";
import { LayoutState } from "../stores/layout/LayoutModels";
import { ParametersState } from "../stores/parameters/ParametersModels";

interface StoreModel {
  readonly business: NewsCategoryStateModel;
  readonly entertainment: NewsCategoryStateModel;
  readonly general: NewsCategoryStateModel;
  readonly headlines: NewsCategoryStateModel;
  readonly layout: LayoutState;
  readonly parameters: ParametersState;
  readonly search: NewsCategoryStateModel;
}

export default StoreModel;
