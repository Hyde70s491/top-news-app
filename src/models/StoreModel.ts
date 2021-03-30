import { LayoutState } from "../stores/layout/LayoutModels";
import { ParametersState } from "../stores/parameters/ParametersModels";
import { SearchState } from "../stores/search/SearchModels";

interface StoreModel {
  readonly layout: LayoutState;
  readonly parameters: ParametersState;
  readonly search: SearchState;
}

export default StoreModel;
