import { createStore } from 'redux';
import UserReducer from './UserReducer';

const initialState = {
  selectedUser: null
};

const store = createStore(UserReducer, initialState);

export default store;