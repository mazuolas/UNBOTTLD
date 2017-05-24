import { connect } from 'react-redux';
import Home from './home';
import { getAllCheckins } from '../../actions/checkin_actions';
import { getTopDrinks } from '../../actions/drink_actions';

const mapStateToProps = (state) => {
  return({
    user: state.session.currentUser,
    topDrinks: state.drinks.top
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
  getTopDrinks: () => dispatch(getTopDrinks()),
  getAllCheckins: () => dispatch(getAllCheckins())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
