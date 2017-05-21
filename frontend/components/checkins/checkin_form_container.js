import { connect } from 'react-redux';
import CheckinForm from './checkin_form';
import { createCheckin } from '../../actions/checkin_actions';
import { getDrink } from '../../actions/drink_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    drink_id: ownProps.match.params.id,
    user_id: state.session.currentUser.id
  })
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createCheckin: checkin => dispatch(createCheckin(checkin)),
    getDrink: id => dispatch(getDrink(id))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinForm)
