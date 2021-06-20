import * as actionTypes from "../actionTypes";

export const searchImages = (searchTerm) => {
  return {
    type: actionTypes.SEARCH_IMAGE_REQUEST,
    searchTerm,
  };
};

export const searchImagesPagination = (searchTerm, pageNumber) => {
  return {
    type: actionTypes.SEARCH_IMAGE_PAGINATION_REQUEST,
    searchTerm,
    pageNumber,
  };
};

export const getRandomImages = () => {
  return {
    type: actionTypes.GET_RANDOM_IMAGE_REQUEST,
  };
};

export const getRandomImagesPagination = (pageNumber) => {
  return {
    type: actionTypes.GET_RANDOM_IMAGE_PAGINATION_REQUEST,
    pageNumber,
  };
};

export const resetPage = () => {
  return {
    type: actionTypes.RESET_PAGES,
  };
};
