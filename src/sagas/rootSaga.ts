import { all } from "redux-saga/effects";
import watcherHandlerDataListings from "./handlers/handlerDataListings";

function* rootSaga() {
  yield all([watcherHandlerDataListings()]);
}
export default rootSaga;
