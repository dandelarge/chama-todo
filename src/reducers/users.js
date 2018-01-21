import {LOGIN, LOGIN_SUCCESS, LOGOUT, SIGNUP} from '../actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      state = action.payload;
      break;
    case LOGIN_SUCCESS:
      state = action.payload;
      state.loggedIn = true;
      break;
    case LOGOUT:
      state = action.payload;
      state.loggedIn = false;
      break;
    case SIGNUP:
      console.log(action);
      break;
    default:
      return state;
  }
  console.log(state);
  return state;
};

export default user;
