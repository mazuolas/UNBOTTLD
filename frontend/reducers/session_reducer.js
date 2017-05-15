import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) =>{
  Object.freeze(state)
  switch(action.type){
    case(RECEIVE_CURRENT_USER):
      return merge({}, nullUser, {action.currentUser});
    case(RECEIVE_ERRORS):
      return merge({}, state, {errors})
    default:
      return state;
  }
}

export default SessionReducer;
