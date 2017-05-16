import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../util/session_api_util';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname.slice(1)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const formAction = (formType === 'login') ? login : signup;
  console.log(formAction);
  return ({
  handleForm: (user) => dispatch(formAction(user))
})};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
