import * as APIUtils from '../util/session_api_utils';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});


export const login = user => dispatch => (
  APIUtils.login(user).then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
);

export const signup = user => dispatch => (
  APIUtils.login(user).then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors)))
);

export const logout = () => dispatch => (
  APIUtils.logout().then(user => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors)))
);
