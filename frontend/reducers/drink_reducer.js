import merge from 'lodash/merge';
import {
  RECEIVE_DRINK,
  RECEIVE_DRINK_ERRORS,
  RECEIVE_ALL_DRINKS,
  REMOVE_DRINK,
  RECEIVE_TOP_DRINKS
} from '../actions/drink_actions';

const DrinkReducer = (state = {errors: []}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch(action.type){
    case(RECEIVE_ALL_DRINKS):
      return merge({}, action.drinks, {errors: []}, {top: newState.top});
    case(RECEIVE_DRINK):
      return merge({}, state, action.drink, {errors: []});
    case(RECEIVE_DRINK_ERRORS):
      delete newState['errors'];
      return merge({}, newState, {errors: action.errors});
    case(REMOVE_DRINK):
      delete newState[action.id];
      return newState;
    case(RECEIVE_TOP_DRINKS):
      return merge({}, newState, { top: action.drinks })
    default:
      return state;
  }
};

export default DrinkReducer;
