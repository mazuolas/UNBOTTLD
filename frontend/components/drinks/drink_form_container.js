import merge from 'lodash/merge';
import { connect } from 'react-redux';
import DrinkForm from './drink_form';
import { createBrewery } from '../../actions/brewery_actions'
import {
  createDrink,
  updateDrink,
  deleteDrink,
  editDrink
  } from '../../actions/drink_actions';


const mapStateToProps = (state, ownProps) => {
  let formType = ownProps.location.pathname.slice(9);
  formType = (formType==='create') ? 'create' : 'edit';
  return ({
    errors: state.drinks.errors,
    formType: formType,
    id: ownProps.match.params.id,
  })
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(9);
  const formAction = (formType === 'create') ? createDrink : updateDrink;

  return ({
    handleForm: (drink) => dispatch(formAction(drink)),
    deleteDrink: (id) => dispatch(deleteDrink(id)),
    editDrink: (id) => dispatch(editDrink(id)),
    createBrewery: (name) => dispatch(createBrewery(name))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrinkForm)
