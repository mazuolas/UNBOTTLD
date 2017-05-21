import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';

const mapStateToProps = (state, ownProps) => {
  return ({
    checkins: state.checkins
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    getCheckins: () => dispatch(ownProps.getMethod())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex)
