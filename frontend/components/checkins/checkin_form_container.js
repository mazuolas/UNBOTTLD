import { connect } from 'react-redux';
import CheckinForm from './checkin_form';
import { createCheckin } from '../../actions/checkin_actions';
import { getDrink } from '../../actions/drink_actions';
import { getCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    drink_id: ownProps.match.params.id,
    user_id: state.session.currentUser.id,
    drink: state.drinks[ownProps.match.params.id],
    errors: state.checkins.errors
  })
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createCheckin: checkin => dispatch(createCheckin(checkin)),
    getDrink: id => dispatch(getDrink(id)),
    getCurrentUser: (id) => dispatch(getCurrentUser(id))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinForm)
