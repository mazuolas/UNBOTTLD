import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type){
    case(RECEIVE_CURRENT_USER):
      return merge({}, nullUser, {currentUser: action.currentUser});
    case(RECEIVE_ERRORS):
      let newState = merge({}, state);
      delete newState['errors'];
      return merge({}, newState, {errors: action.errors})
    default:
      return state;
  }
};

export default SessionReducer;
