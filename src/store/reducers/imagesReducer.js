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

    case actionType.SORT_IMAGE_LIST_BY_SIZE:
      const sortedArrayBySize = state.images
        .slice()
        .sort((a, b) =>
          a.imageSize < b.imageSize ? 1 : b.imageSize < a.imageSize ? -1 : 0
        );
      console.log("Sorted Array By Size : ", sortedArrayBySize);
      return updateObject(state, {
        images: sortedArrayBySize,
      });

    case actionType.SORT_IMAGE_LIST_BY_VIEWS:
      const sortedArrayByViews = state.images
        .slice()
        .sort((a, b) => (a.views < b.views ? 1 : b.views < a.views ? -1 : 0));
      console.log("Sorted Array By Views : ", sortedArrayByViews);
      return updateObject(state, {
        images: sortedArrayByViews,
      });

    default:
      return state;
  }
};

export default reducer;
