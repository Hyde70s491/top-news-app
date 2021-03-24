import { LayoutState } from "../stores/layout/LayoutModels";
import { ParametersState } from "../stores/parameters/ParametersModels";

interface StoreModel {
  readonly layout: LayoutState;
  readonly parameters: ParametersState;
}

export default StoreModel;
