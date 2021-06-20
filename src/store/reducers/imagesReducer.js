import * as actionType from "../actionTypes";
import { updateObject } from "../utility";

const initialState = {
  loader: false,
  message: null,
  pageNumber: 1,
  totalPages: 0,
  images: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_RANDOM_IMAGE_REQUEST:
      return updateObject(state, {
        loader: true,
      });
    case actionType.GET_RANDOM_IMAGE_SUCCESS:
      return updateObject(state, {
        loader: false,
        images: action.imagesList,
        totalPages: action.totalPages,
        pageNumber: state.pageNumber + 1,
      });
    case actionType.GET_RANDOM_IMAGE_FAILURE:
      return updateObject(state, {
        loader: false,
        message: "Can't fetch images, server error",
      });

    case actionType.GET_RANDOM_IMAGE_PAGINATION_REQUEST:
      return updateObject(state, {
        loader: true,
      });
    case actionType.GET_RANDOM_IMAGE_PAGINATION_SUCCESS:
      return updateObject(state, {
        loader: false,
        images: [...state.images, ...action.imagesList],
        totalPages: action.totalPages,
        pageNumber: state.pageNumber + 1,
      });
    case actionType.GET_RANDOM_IMAGE_PAGINATION_FAILURE:
      return updateObject(state, {
        loader: false,
        message: "Can't fetch images, server error",
      });

    case actionType.SEARCH_IMAGE_REQUEST:
      return updateObject(state, {
        loader: true,
      });
    case actionType.SEARCH_IMAGE_SUCCESS:
      return updateObject(state, {
        loader: false,
        images: action.imagesList,
        totalPages: action.totalPages,
        pageNumber: state.pageNumber + 1,
      });
    case actionType.SEARCH_IMAGE_FAILURE:
      return updateObject(state, {
        loader: false,
        message: "Can't fetch images, server error",
      });

    case actionType.SEARCH_IMAGE_PAGINATION_REQUEST:
      return updateObject(state, {
        loader: true,
      });
    case actionType.SEARCH_IMAGE_PAGINATION_SUCCESS:
      return updateObject(state, {
        loader: false,
        images: [...state.images, ...action.imagesList],
        totalPages: action.totalPages,
        pageNumber: state.pageNumber + 1,
      });
    case actionType.SEARCH_IMAGE_PAGINATION_FAILURE:
      return updateObject(state, {
        loader: false,
        message: "Can't fetch images, server error",
      });

    case actionType.RESET_PAGES:
      return updateObject(state, {
        totalPages: 0,
        pageNumber: 1,
        images: [],
      });

    default:
      return state;
  }
};

export default reducer;
