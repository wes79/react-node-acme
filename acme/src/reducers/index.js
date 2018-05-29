import { combineReducers } from 'redux';
import EmployeesReducer from './reducer-employees';
import PositionReducer from './reducer-positions';


const rootReducer = combineReducers({
  employees: EmployeesReducer,
  openings: PositionReducer
});

export default rootReducer;
