import {LOGIN, LOGIN_SUCCESS, LOGOUT, SIGNUP} from '../actions';

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      state = action.payload;
      break;
    case LOGIN_SUCCESS:
      console.log(action);
      state = action.payload;
      break;
    case LOGOUT:
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
