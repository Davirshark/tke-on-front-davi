import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducer from './Reducers';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools({ name: process.env.npm_package_name })
    : null || compose;

const rootReducer = (state: any, action: any) => appReducer(state, action);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
