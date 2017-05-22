import * as APIUtils from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const clearUser = () => ({
  type: CLEAR_USER
});

export const login = user => dispatch => (
  APIUtils.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const signup = user => dispatch => (
  APIUtils.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const logout = () => dispatch => (
  APIUtils.logout().then(
    user => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const getCurrentUser = (id) => dispatch => (
  APIUtils.getUser(id).then(
    user => dispatch(receiveCurrentUser(user))
  )
);

export const getUser = (id) => dispatch => (
  APIUtils.getUser(id).then(
    user => dispatch(receiveUser())
  )
);
