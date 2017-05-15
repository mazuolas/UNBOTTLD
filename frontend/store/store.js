import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

export default (preloadedstate = {}) => (
  createStore(
    rootReducer,
    preloadedstate,
    applyMiddleware(thunk)
  )
);
