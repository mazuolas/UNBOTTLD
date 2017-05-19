import * as BreweryUtil from '../util/brewery_api_util';

export const createBrewery = id => dispatch => (
  BreweryUtil.createBrewery(id)
);
