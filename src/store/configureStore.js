import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducer from '../reducers';
import promiseMiddleware from '../middleware/promiseMiddleware.js';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger, ReduxThunk));

export default store;

/*
const createOurStore = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware));
  // const enhancer = compose(applyMiddleware(promiseMiddleware));

  return createStore(
    reducer
    // initialState,
    // enhancer
  );
};

var store = createOurStore();
export default store;
*/
