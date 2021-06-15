import * as actionTypes from "../actionTypes";

export const updateSearchText = (text) => {
  return {
    type: actionTypes.UPDATE_SEARCH_TEXT,
    text,
  };
};
