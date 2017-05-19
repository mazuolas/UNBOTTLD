import merge from 'lodash/merge';
import {
  RECEIVE_DRINK,
  RECEIVE_ERRORS,
  RECEIVE_ALL_DRINKS,
  REMOVE_DRINK,
} from '../actions/drink_actions';

const DrinkReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case(RECEIVE_ALL_DRINKS):
      return merge({}, action.drinks, {errors: []});
    case(RECEIVE_DRINK):
      return merge({}, state, action.drink, {errors: []});
    case(RECEIVE_ERRORS):
      return merge({}, state, {errors: action.errors});
    case(REMOVE_DRINK):
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default DrinkReducer;
