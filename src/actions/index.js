export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const addTodo = (text,id) => {
  return {
    type: ADD_TODO,
    id,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const login = (user, pass) => {
  return {
    type: LOGIN,
    user,
    pass
  };
};

export const logout = user => {
  return {
    type: LOGOUT,
    user
  };
};
