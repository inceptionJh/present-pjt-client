import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducer from '../reducers';
import promiseMiddleware from '../middleware/promiseMiddleware.js';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger, ReduxThunk));

export default store;
