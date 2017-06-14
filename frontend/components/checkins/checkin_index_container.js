import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';
import { clearCheckins, deleteCheckin } from '../../actions/checkin_actions';


const mapStateToProps = (state) => {
  return ({
    checkins: state.checkins,
    userId: state.session.currentUser.id
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    clearCheckins: () => dispatch(clearCheckins()),
    deleteCheckin: (id) => dispatch(deleteCheckin(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex)
