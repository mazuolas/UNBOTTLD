import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import DrinkReducer from './drink_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  drinks: DrinkReducer
});

export default rootReducer;
