import { connect } from 'react-redux';
import Profile from './profile';
import { getUser, clearUser } from '../../actions/session_actions';
import { getUserCheckins } from '../../actions/checkin_actions';

const mapStateToProps = ( state ) => ({
  user: state.session.user
});

const mapDispatchToProps = (dispatch, ownProps) = => ({
  getUser: () => dispatch(getUser(ownProps.match.params.id)),
  getUserCheckins: () => dispatch(getUserCheckins(ownProps.match.params.id)),
  clearUser: () => dispatch(clearUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
