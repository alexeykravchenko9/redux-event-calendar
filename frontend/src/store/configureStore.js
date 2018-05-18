import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import reducers from '../reducers/index';

export default (initialState) => createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)))