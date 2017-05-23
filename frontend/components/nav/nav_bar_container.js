import { connect } from 'react-redux'
import NavBar from './nav_bar';
import { logout, getCurrentUser } from '../../actions/session_actions';
import { getDrinkSearch } from '../../actions/drink_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  location: ownProps.location.pathname,
  history: ownProps.history
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  getCurrentUser: (id) => dispatch(getCurrentUser(id)),
  getDrinkSearch: (search) => dispatch(getDrinkSearch(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
