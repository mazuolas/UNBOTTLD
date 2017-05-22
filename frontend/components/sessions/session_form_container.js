import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, receiveErrors } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.location.pathname.slice(1)
  formType = (formType === 'signup')? 'sign up' : 'log in';
  return ({
    errors: state.session.errors,
    formType: formType
  });
}
const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const formAction = (formType === 'login') ? login : signup;
  const guest = { user: {
    username: 'guest',
    password: 'supersecretguestpassword' }
  };
  return ({
  handleForm: (user) => dispatch(formAction(user)),
  guestLogin: () => dispatch(login(guest)),
  clearErrors: () => dispatch(receiveErrors([]))
})};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
