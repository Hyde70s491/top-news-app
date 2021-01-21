import { createStore, Store } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

const rootStore: Store = createStore(rootReducer, devToolsEnhancer({}));

export default rootStore;
