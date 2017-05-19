//drink_container
import { connect } from 'react-redux';
import DrinkPage from './drink_page';
import { getDrink } from '../../actions/drink_actions';

const mapStateToProps = (state, ownProps) => ({
  drink: state.drinks[ownProps.match.params.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getDrink: () => dispatch(getDrink(ownProps.match.params.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkPage)
