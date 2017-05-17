import * as DrinkUtil from '../util/drink_api_util';
export const RECEIVE_DRINK = 'RECEIVE_DRINK';
export const RECEIVE_ALL_DRINKS = 'RECEIVE_ALL_DRINKS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const DELETE_DRINK = 'DELETE_DRINK';

export const receiveErrrors = errors ({
  type: RECEIVE_ERRORS,
  errors
});

export const deleteDrink = id => ({
  type: DELETE_DRINK,
  id
});

export const receiveDrink = drink => ({
  type: RECEIVE_DRINK,
  drink
});

export const receiveAllDrinks = drinks => ({
  type: RECEIVE_ALL_DRINKS,
  drink
});

export const createDrink = drink => dispatch => (
  DrinkUtil.createDrink(drink).then(
    drink => dispatch(receiveDrink(drink)),
    errors => diapatch(receiveErrors(errors))
  )
);

export const getDrink = id => dispatch => (
  DrinkUtil.getDrink(id).then(
    drink => dispatch(receiveDrink(drink)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const getAllDrinks = () => dispatch => (
  DrinkUtil.getAllDrinks().then(
    drinks => dispatch(receiveAllDrinks(drinks)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const updateDrink = drink => dispatch => (
  DrinkUtil.updateDrink(drink).then(
    drink => dispatch(receiveDrink(drink)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const deleteDrink = id => dispatch => (
  DrinkUtil.deleteDrink(id).then(
    drink => dispatch(removeDrink(drink)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const editDrink = id => dispatch => (
  DrinkUtil.editDrink(id).then(
    drink => dispatch(receiveDrink(drink)),
    errors => dispatch(receiveErrors))
  )
);
