import { connect } from 'react-redux';
import Profile from './profile';
import { getUser, clearUser, updateUser } from '../../actions/session_actions';
import { getUserCheckins, clearCheckins } from '../../actions/checkin_actions';

const mapStateToProps = ( state, ownProps ) => ({
  user: state.session.user,
  id: ownProps.match.params.id,
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUser: () => dispatch(getUser(ownProps.match.params.id)),
  getUserCheckins: (pos) => dispatch(getUserCheckins(ownProps.match.params.id, pos)),
  clearUser: () => dispatch(clearUser()),
  clearCheckins: () => dispatch(clearCheckins()),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
