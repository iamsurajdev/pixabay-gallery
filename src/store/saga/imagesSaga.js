import { call, put, takeEvery } from "redux-saga/effects";
import ApiCalls from "../../api/apiAgent";
import * as actions from "../actionTypes";

function* searchImageRequestHelper(action) {
  try {
    const response = yield call(ApiCalls.searchForImages, action.searchTerm);

    yield put({
      type: actions.SEARCH_IMAGE_SUCCESS,
      imagesList: response.data.hits,
      totalPages: response.data.totalHits / response.data.hits.length,
    });
  } catch (e) {
    yield put({ type: actions.SEARCH_IMAGE_FAILURE });
  }
}

function* searchImageRequestPaginationHelper(action) {
  try {
    const response = yield call(
      ApiCalls.searchForImagesPagination,
      action.searchTerm,
      action.pageNumber
    );

    yield put({
      type: actions.SEARCH_IMAGE_PAGINATION_SUCCESS,
      imagesList: response.data.hits,
      totalPages: response.data.totalHits / response.data.hits.length,
    });
  } catch (e) {
    yield put({ type: actions.SEARCH_IMAGE_PAGINATION_FAILURE });
  }
}

function* getRandomImageRequestHelper(action) {
  try {
    const response = yield call(ApiCalls.fetchRandomImages);

    yield put({
      type: actions.GET_RANDOM_IMAGE_SUCCESS,
      imagesList: response.data.hits,
      totalPages: response.data.totalHits / response.data.hits.length,
    });
  } catch (e) {
    yield put({ type: actions.GET_RANDOM_IMAGE_FAILURE });
  }
}

function* getRandomImagePaginationRequestHelper(action) {
  try {
    const response = yield call(
      ApiCalls.fetchRandomImagesPagination,
      action.pageNumber
    );

    yield put({
      type: actions.GET_RANDOM_IMAGE_PAGINATION_SUCCESS,
      imagesList: response.data.hits,
      totalPages: response.data.totalHits / response.data.hits.length,
    });
  } catch (e) {
    yield put({ type: actions.GET_RANDOM_IMAGE_PAGINATION_FAILURE });
  }
}

export function* imagesSaga() {
  yield takeEvery(actions.SEARCH_IMAGE_REQUEST, searchImageRequestHelper);
  yield takeEvery(
    actions.SEARCH_IMAGE_PAGINATION_REQUEST,
    searchImageRequestPaginationHelper
  );
  yield takeEvery(
    actions.GET_RANDOM_IMAGE_REQUEST,
    getRandomImageRequestHelper
  );
  yield takeEvery(
    actions.GET_RANDOM_IMAGE_PAGINATION_REQUEST,
    getRandomImagePaginationRequestHelper
  );
}
