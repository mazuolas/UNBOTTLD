import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';

const mapStateToProps = (state, ownProps) => {
  return ({
    checkins: state.checkins,
    id: ownProps.match.params.id
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return({
    getCheckins: (id) => dispatch(ownProps.getMethod(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex)
