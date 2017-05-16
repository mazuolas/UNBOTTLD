import { connect } from 'react-redux';
import SessionForm from './SessionForm';

const mapStateToProps = state, ownProps => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
