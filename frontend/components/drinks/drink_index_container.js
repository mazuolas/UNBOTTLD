import { connect } from 'react-redux';
import DrinkIndex from './drink_index';
import { getAllDrinks, getTopDrinks } from '../../actions/drink_actions';

const mapStateToProps = (state) => ({
  drinks: state.drinks,
  user: state.session.currentUser,
  topDrinks: state.drinks.top
});

const mapDispatchToProps = (dispatch) => ({
  getAllDrinks: () => dispatch(getAllDrinks()),
  getTopDrinks: () =>  dispatch(getTopDrinks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkIndex)
