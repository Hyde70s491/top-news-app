import { Reducer } from "redux";

import ActionModel from "../../models/ActionModel";
import { HeadlinesState } from "./HeadlinesModels";
import { initiaState } from "./HeadlinesState";

const HeadlinesReducer: Reducer = (
  state: HeadlinesState = initiaState,
  action: ActionModel<undefined>
): HeadlinesState => {
  if (action.error) {
    return state;
  }

  switch (action.type) {
    default:
      return state;
  }
};

export default HeadlinesReducer;
