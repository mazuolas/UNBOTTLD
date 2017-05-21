import {
  RECEIVE_ALL_CHECKINS,
  RECEIVE_CHECKIN,
  RECEIVE_ERRORS
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
    case(RECEIVE_CHECKIN):
      return merge({}, state, action.checkin, defaultState);
    case(RECEIVE_ERRORS):
      delete newState['errors'];
      return merge({}, newState, action.errors);
    default:
      return state;
  }
}

export default CheckinReducer;
