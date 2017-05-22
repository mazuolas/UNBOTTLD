import { connect } from 'react-redux';
import Profile from './profile';
import { getUser } from '../../actions/session_actions';

const mapStateToProps = ( state ) => ({
  user: state.session.user
});

const mapDispatchToProps = (dispatch, ownProps) = => ({
  getUser: () => dispatch(getUser(ownProps.match.params.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
