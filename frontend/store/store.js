import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { getTodos} from '../utils/todo_api_util';

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  window.getTodos = getTodos;
  return store;
};

export default configureStore;
