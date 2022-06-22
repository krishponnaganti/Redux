import { createStore } from "redux-dynamic-modules";
import { getListingModule } from "./modules/listingModule";
import { getSagaExtension } from "redux-dynamic-modules-saga";
import { getThunkExtension } from "redux-dynamic-modules-thunk";

const store = createStore(
  {
    initialState: {
      /** initial state */
    },
    enhancers: [
      /** enhancers to include */
    ],
    extensions: [
      getSagaExtension(),
      getThunkExtension()
      /** extensions to include i.e. getSagaExtension(), getThunkExtension() */
    ]
  },
  getListingModule()
  /* ...any additional modules */
);

export default store;
