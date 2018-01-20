import { combineReducers } from 'redux';
import todos  from './todos';
import user from './users';

const todoApp = combineReducers({
  todos,
  user
});

export default todoApp;
