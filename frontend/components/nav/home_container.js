import { connect } from 'react-redux';
import Home from './home';
import { getAllCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state) => {
  return({
    user: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
  getAllCheckins: () => dispatch(getAllCheckins())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
