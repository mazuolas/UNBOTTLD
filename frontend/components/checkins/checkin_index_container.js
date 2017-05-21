import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';
import { getAllCheckins } from '../../actions/checkin_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    checkins: state.checkins
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const getMethod = (ownProps.getMethod) ? ownProps.getMethod : getAllCheckins;
  console.log(getMethod);
  return({
    getCheckins: () => dispatch(getMethod())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinIndex)
