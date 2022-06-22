import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import moduleStore from "./moduleStore";
// import rootSaga from "./sagas/rootSaga";

// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleWare = createSagaMiddleware();
// sagaMiddleWare.run(rootSaga);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={moduleStore}>
      <App />
    </Provider>
  </StrictMode>
);
