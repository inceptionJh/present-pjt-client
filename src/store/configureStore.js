import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducer from '../reducers';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger, ReduxThunk));

export default store;
