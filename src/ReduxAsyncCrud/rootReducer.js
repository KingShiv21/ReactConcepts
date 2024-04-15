import { combineReducers } from 'redux';
import { userDetails } from './userDetailSlice';

const rootReducer = combineReducers({
  userData: userDetails,
});

export default rootReducer;