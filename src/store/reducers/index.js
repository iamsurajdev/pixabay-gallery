import { combineReducers } from "redux";

import imagesStore from "./imagesReducer";
import searchStore from "./searchReducer";

const rootReducer = combineReducers({
  imagesStore,
  searchStore,
});

export default rootReducer;
