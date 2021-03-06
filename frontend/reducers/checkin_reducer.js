import {
  RECEIVE_ALL_CHECKINS,
  RECEIVE_CHECKIN,
  RECEIVE_CHECKIN_ERRORS,
  CLEAR_CHECKINS,
  RECEIVE_MORE_CHECKINS,
  REMOVE_CHECKIN
} from '../actions/checkin_actions';
import merge from 'lodash/merge';

const defaultState = {
  errors: []
};

const CheckinReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case(RECEIVE_ALL_CHECKINS):
      return merge({}, defaultState, action.checkins);
    case(RECEIVE_MORE_CHECKINS):
      return merge({}, newState, action.checkins);
    case(RECEIVE_CHECKIN):
      delete newState['errors'];
      return merge({}, newState, action.checkin, defaultState);
    case(RECEIVE_CHECKIN_ERRORS):
      delete newState['errors'];
      return merge({}, newState, {errors: action.errors});
    case(CLEAR_CHECKINS):
      return merge({}, defaultState);
      case(REMOVE_CHECKIN):
      delete newState[action.id];
      return newState
    default:
      return state;
  }
}

export default CheckinReducer;
