import * as CheckinUtil from '../util/checkin_api_util';
export const RECEIVE_ALL_CHECKINS = 'RECEIVE_ALL_CHECKINS';
export const RECEIVE_CHECKIN = 'RECEIVE_CHECKIN';
export const RECEIVE_CHECKIN_ERRORS = 'RECEIVE_CHECKIN_ERRORS';
export const CLEAR_CHECKINS = 'CLEAR_CHECKINS';

export const receiveAllCheckins = (checkins) => ({
  type: RECEIVE_ALL_CHECKINS,
  checkins
});

export const clearCheckins = () => ({
  type: CLEAR_CHECKINS
});

export const receiveCheckin = checkin => ({
  type: RECEIVE_CHECKIN,
  checkin: { [checkin.id]: checkin},
  id: checkin.id
});

export const receiveErrors = errors => ({
  type: RECEIVE_CHECKIN_ERRORS,
  errors: errors.responseJSON
})

export const getDrinkCheckins = id => dispatch => (
  CheckinUtil.getDrinkCheckins(id).then(
    checkins => dispatch(receiveAllCheckins(checkins))
  )
);

export const getUserCheckins = id => dispatch => (
  CheckinUtil.getUserCheckins(id).then(
    checkins => dispatch(receiveAllCheckins(checkins))
  )
);

export const getAllCheckins = id => dispatch => (
  CheckinUtil.getAllCheckins(id).then(
    checkins => dispatch(receiveAllCheckins(checkins))
  )
);

export const getCheckin = id => dispatch => (
  CheckinUtil.getCheckin(id).then(
    checkin => dispatch(receiveAllCheckins(checkin))
  )
);

export const createCheckin = checkin => dispatch => (
  CheckinUtil.createCheckin(checkin).then(
    checkin => dispatch(clearCheckins()),
    errors => dispatch(receiveErrors(errors))
  )
);
