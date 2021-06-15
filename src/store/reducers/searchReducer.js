import * as actionType from "../actionTypes";
import { updateObject } from "../utility";

const initialState = {
  searchText: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.UPDATE_SEARCH_TEXT:
      return updateObject(state, {
        searchText: action.text,
      });

    default:
      return state;
  }
};

export default reducer;
