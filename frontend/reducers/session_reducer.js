import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  RECEIVE_USER
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: [],
  user: null
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch(action.type){
    case(RECEIVE_CURRENT_USER):
      return merge({}, state, {currentUser: action.currentUser});
    case(RECEIVE_USER):
      return merge({}, state, {user: action.user})
    case(RECEIVE_ERRORS):
      delete newState['errors'];
      return merge({}, newState, {errors: action.errors})
    default:
      return state;
  }
};

export default SessionReducer;
