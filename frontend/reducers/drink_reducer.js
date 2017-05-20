import merge from 'lodash/merge';
import {
  RECEIVE_DRINK,
  RECEIVE_DRINK_ERRORS,
  RECEIVE_ALL_DRINKS,
  REMOVE_DRINK,
} from '../actions/drink_actions';

const DrinkReducer = (state = {errors: []}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);
  switch(action.type){
    case(RECEIVE_ALL_DRINKS):
      return merge({}, action.drinks, {errors: []});
    case(RECEIVE_DRINK):
      return merge({}, state, action.drink, {errors: []});
    case(RECEIVE_DRINK_ERRORS):
      delete newState['errors'];
      return merge({}, newState, {errors: action.errors});
    case(REMOVE_DRINK):
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default DrinkReducer;
