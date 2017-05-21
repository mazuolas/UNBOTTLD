import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';
import { getAllCheckins, clearCheckins } from '../../actions/checkin_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    checkins: state.checkins
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    getCheckins: () => dispatch(getAllCheckins()),
    clearCheckins: () => dispatch(clearCheckins())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex)
