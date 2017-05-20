import * as CheckinUtil from '../util/checkin_api_util';
export const RECEIVE_ALL_CHECKINS = 'RECEIVE_ALL_CHECKINS';
export const RECEIVE_CHECKIN = 'RECEIVE_CHECKIN';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveAllCheckins = (checkins) => ({
  type: RECEIVE_ALL_CHECKINS,
  checkins
});

export const receiveCheckin = checkin => ({
  type: RECEIVE_CHECKIN,
  checkin
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
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
    checkin => dispatch(receiveCheckin(checkin))
  )
);

export const createCheckin = checkin => dispatch => (
  CheckinUtil.createCheckin(checkin).then(
    checkin => dispatch(receiveCheckin(checkin)),
    errors => dispatch(receiveErrors(errors))
  )
);
