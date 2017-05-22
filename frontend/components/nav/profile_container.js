import { connect } from 'react-redux';
import Profile from './profile';
import { getUser, clearUser } from '../../actions/session_actions';
import { getUserCheckins, clearCheckins } from '../../actions/checkin_actions';

const mapStateToProps = ( state, ownProps ) => ({
  user: state.session.user,
  id: ownProps.match.params.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUser: () => dispatch(getUser(ownProps.match.params.id)),
  getUserCheckins: () => dispatch(getUserCheckins(ownProps.match.params.id)),
  clearUser: () => dispatch(clearUser()),
  clearCheckins: () => dispatch(clearCheckins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
