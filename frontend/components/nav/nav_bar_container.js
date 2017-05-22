import { connect } from 'react-redux'
import NavBar from './nav_bar';
import { logout, getCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  user: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getCurrentUser: (id) => dispatch(getCurrentUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
