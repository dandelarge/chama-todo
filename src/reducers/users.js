import {LOGIN, LOGOUT} from '../actions';

const user = (state, action) => {
  state = state || {loggedIn: false};
  switch (action.type) {
    case LOGIN:
      console.log(action);
      state.loggedIn = true;
      break;
    case LOGOUT:
      state.loggedIn = false;
      break;
    default:
      return state;
  }
  console.log(state);
  return state;
};

export default user;
