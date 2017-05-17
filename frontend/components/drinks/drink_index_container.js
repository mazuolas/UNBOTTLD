import { connect } from 'react-redux';
import DrinkIndex from './drink_index';
import { getAllDrinks } from '../../actions/drink_actions';

const mapStateToProps = (state) => ({
  drinks: state.drinks
});

const mapDispatchToProps = (dispatch) => ({
  getAllDrinks: () => dispatch(getAllDrinks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkIndex)
