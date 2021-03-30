import { Reducer } from "redux";

import ActionModel from "../../models/ActionModel";
import { SearchState } from "./SearchModels";
import { initialState } from "./SearchState";

const SearchReducer: Reducer = (
  state: SearchState = initialState,
  action: ActionModel<undefined>
): SearchState => {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    default:
      return state;
  }
};

export default SearchReducer;
