import getListings from "../actions";
import getDemoListings from "../reducers/getDemoListings";
import getListingsReducer from "../reducers/getListings";
import rootSaga from "../sagas/rootSaga";

export function getListingModule() {
  return {
    id: "listings",
    reducerMap: {
      dataListings: getListingsReducer,
      demoListings: getDemoListings
    },
    // Actions to fire when this module is added/removed
    initialActions: [getListings()],
    // finalActions: []
    sagas: [rootSaga]
  };
}
