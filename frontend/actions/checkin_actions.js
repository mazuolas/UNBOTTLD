import * as CheckinUtil from '../util/checkin_api_util';
export const RECEIVE_ALL_CHECKINS = 'RECEIVE_ALL_CHECKINS';
export const RECEIVE_CHECKIN = 'RECEIVE_CHECKIN';
export const RECEIVE_CHECKIN_ERRORS = 'RECEIVE_CHECKIN_ERRORS';
export const CLEAR_CHECKINS = 'CLEAR_CHECKINS';
export const RECEIVE_MORE_CHECKINS = 'RECEIVE_MORE_CHECKINS';
export const REMOVE_CHECKIN = 'REMOVE_CHECKIN';

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
});

export const receiveMoreCheckins = checkins => ({
  type: RECEIVE_MORE_CHECKINS,
  checkins
});

export const removeCheckin = id => ({
  type: REMOVE_CHECKIN,
  id
})

export const getDrinkCheckins = (id, pos) => dispatch => {
  if (pos == 0) {
    return(
      CheckinUtil.getDrinkCheckins(id, pos).then(
        checkins => dispatch(receiveAllCheckins(checkins))
      )
    )
  } else {
    return(
      CheckinUtil.getDrinkCheckins(id, pos).then(
        checkins => dispatch(receiveMoreCheckins(checkins))
      )
    )
  }
};

export const getUserCheckins = (id, pos) => dispatch => {
  if (pos == 0) {
    return(
      CheckinUtil.getUserCheckins(id, pos).then(
        checkins => dispatch(receiveAllCheckins(checkins))
      )
    )
  } else {
    return(
      CheckinUtil.getUserCheckins(id, pos).then(
        checkins => dispatch(receiveMoreCheckins(checkins))
      )
    )
  }
};

export const getAllCheckins = (id, pos) => dispatch => {
  if (pos == 0) {
    return(
      CheckinUtil.getAllCheckins(id, pos).then(
        checkins => dispatch(receiveAllCheckins(checkins))
      )
    )
  } else {
    return(
      CheckinUtil.getAllCheckins(id, pos).then(
        checkins => dispatch(receiveMoreCheckins(checkins))
      )
    )
  }
};

export const getCheckin = id => dispatch => (
  CheckinUtil.getCheckin(id).then(
    checkin => dispatch(receiveAllCheckins(checkin))
  )
);

export const deleteCheckin = id => dispatch => (
  CheckinUtil.deleteCheckin(id).then(
    checkin => dispatch(removeCheckin(checkin.id))
  )
);

export const createCheckin = checkin => dispatch => (
  CheckinUtil.createCheckin(checkin).then(
    checkin => dispatch(clearCheckins()),
    errors => dispatch(receiveErrors(errors))
  )
);
