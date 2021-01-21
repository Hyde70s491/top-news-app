import { combineReducers, Reducer } from "redux";

// test redux, react-redux and reselect libraries
import { createSelector } from "reselect";

export const testReducerInitialState = {
  welcomeMessage: "Hello, Top News App!",
};

export const testReducer = (state = testReducerInitialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const selectWelcomeMessage = createSelector(
  (state: any) => state?.test?.welcomeMessage,
  (welcomeMessage) => welcomeMessage
);
//

const rootReducer: Reducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
