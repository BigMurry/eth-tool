import { createStore, applyMiddleware } from 'redux';
import {createActions, handleActions} from 'redux-actions';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const STORE_ACTION_KEYS = {
  SET_ACCOUNT: 'SET_ACCOUNT',
  SET_PROVIDER: 'SET_PROVIDER',
  SET_NETWORK: 'SET_NETWORK',
  SET_NOTICE: 'SET_NOTICE'
};

export const STORE_ACTIONS = createActions({
  [STORE_ACTION_KEYS.SET_ACCOUNT]: (account) => ({account}),
  [STORE_ACTION_KEYS.SET_PROVIDER]: (provider) => ({provider}),
  [STORE_ACTION_KEYS.SET_NETWORK]: (network) => ({network}),
  [STORE_ACTION_KEYS.SET_NOTICE]: (notice) => ({notice})
});

const reducer = handleActions({
  [STORE_ACTION_KEYS.SET_ACCOUNT]: (state, {payload: {account}}) => {
    return {...state, account};
  },
  [STORE_ACTION_KEYS.SET_PROVIDER]: (state, {payload: {provider}}) => {
    return {...state, provider};
  },
  [STORE_ACTION_KEYS.SET_NETWORK]: (state, {payload: {network}}) => {
    return {...state, network};
  },
  [STORE_ACTION_KEYS.SET_NOTICE]: (state, {payload: {id, msg, variant}}) => {
    if (typeof id === 'undefined') {
      id = new Date().getTime();
    }
    return {...state, notice: {id, msg, variant}};
  }
}, {});

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const initStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
