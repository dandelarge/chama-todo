import firebase from 'firebase';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

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
    payload: firebase.auth().signInWithEmailAndPassword(user, pass)
  };
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const logout = user => {
  return {
    type: LOGOUT,
    payload: firebase.auth().signOut()
  };
};

export const signup = (user, pass) => {
  return {
    type: SIGNUP,
    payload: firebase.auth().createUserWithEmailAndPassword(user, pass)
  };
};
