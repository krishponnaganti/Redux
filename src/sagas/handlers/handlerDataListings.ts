import dataListings from "../requests/dataListings";

import { call, put, takeEvery } from "redux-saga/effects";
function* handlerDataListings() {
  try {
    const allListings = yield call(dataListings);
    // console.log(allListings);
    yield put({ type: "GET_LISTINGS_SUCCESS", listings: allListings });
  } catch (err) {
    yield put({ type: "GET_LISTINGS_FAILED", errorMessage: err.message });
  }
}
function* watcherHandlerDataListings() {
  yield takeEvery("GET_LISTINGS_REQUESTED", handlerDataListings);
}

export default watcherHandlerDataListings;
