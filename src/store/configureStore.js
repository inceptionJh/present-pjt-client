import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/user";
import promiseMiddleware from "../middleware/promiseMiddleware.js";

const createOurStore = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware));
  // const enhancer = compose(applyMiddleware(promiseMiddleware));

  return createStore(
    reducer,
    // initialState,
    enhancer
  );
};

var store = createOurStore();
export default store;
