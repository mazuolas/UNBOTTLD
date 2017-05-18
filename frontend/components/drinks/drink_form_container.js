import { connect } from 'react-redux';
import DrinkForm from './drink_form';
import {
  createDrink,
  updateDrink,
  deleteDrink,
  } from '../../actions/drink_actions';

  const mapStateToProps = (state, ownProps) => ({
    errors: state.drinks.errors,
    formType: ownProps.location.pathname.slice(7)
  });

  const mapDispatchToProps = (diapatch, ownProps) => {
    const formType = ownProps.location.pathname.slice(7);
    const formAction = (formType === 'create') ? createDrink : editDrink;

    return ({
      handleForm: (drink) => dispatch(formAction(user)),
      deleteDrink: (id) => dispatch(deleteDrink(id)),
    });

  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DrinkForm)
