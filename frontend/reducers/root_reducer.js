import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import DrinkReducer from './drink_reducer';
import CheckinReducer from './checkin_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  drinks: DrinkReducer,
  checkins: CheckinReducer
});

export default rootReducer;
