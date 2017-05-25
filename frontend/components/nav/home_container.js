import { connect } from 'react-redux';
import Home from './home';
import { getAllCheckins } from '../../actions/checkin_actions';
import { getTopDrinks } from '../../actions/drink_actions';

const mapStateToProps = (state) => {
  return({
    user: state.session.currentUser,
    topDrinks: state.drinks.top,
    totalCheckins: state.checkins.all_checkins 
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
  getTopDrinks: () => dispatch(getTopDrinks()),
  getAllCheckins: (pos) => dispatch(getAllCheckins(pos))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
