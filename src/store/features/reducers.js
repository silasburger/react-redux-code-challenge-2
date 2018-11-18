import { combineReducers } from 'redux';
import companies from './companies/reducers';

const rootReducer = combineReducers({
  companies,
});
export default rootReducer;