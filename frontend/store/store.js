import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import createLogger from 'redux-logger';
import thunk from '../middleware/thunk';

const logger = createLogger();

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    RootReducer,
     preloadedState,
     applyMiddleware(thunk)
  );

  return store;
};

export default configureStore;
