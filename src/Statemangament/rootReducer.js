import { combineReducers } from 'redux';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  // Make sure 'movie' is the key for the movieReducer
  user: userReducer,
});

export default rootReducer;