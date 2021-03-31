import { HeadlinesState } from "../stores/headlines/HeadlinesModels";
import { LayoutState } from "../stores/layout/LayoutModels";
import { ParametersState } from "../stores/parameters/ParametersModels";
import { SearchState } from "../stores/search/SearchModels";

interface StoreModel {
  readonly headlines: HeadlinesState;
  readonly layout: LayoutState;
  readonly parameters: ParametersState;
  readonly search: SearchState;
}

export default StoreModel;
