import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname.slice(1)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const formAction = (formType === 'login') ? login : signup;
  const guest = { user: {
    username: 'guest',
    password: 'supersecretguestpassword' }
  };
  return ({
  handleForm: (user) => dispatch(formAction(user)),
  guestLogin: () => dispatch(login(guest))
})};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
