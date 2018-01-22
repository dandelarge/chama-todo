import firebase from 'firebase';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FETCH_TODOS = 'FETCH_TODOS';
export const GOOGLE_LOGIN = 'GOOGLE_LOGIN';

export const fetchTodos = () => {
  const database = firebase.database().ref('todos/');
  return {
    type: FETCH_TODOS,
    payload: database.once('value')
  };
};

export const addTodo = (text,id) => {
  const database = firebase.database().ref('todos/' + id);
  return {
    type: ADD_TODO,
    payload: database.set({
      id,
      text,
      dateCreated: Date.now(),
      done: false
    }),
    id,
    text
  };
};

export const toggleTodo = id => {
  const database = firebase.database().ref('todos/' + id + '/done');
  return {
    type: TOGGLE_TODO,
    payload: database,
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

export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return {
    type: GOOGLE_LOGIN,
    payload: firebase.auth().signInWithPopup(provider)
  }
}

export const logout = user => {
  firebase.auth().signOut()
  return {
    type: LOGOUT,
    payload: {}
  };
};

export const signup = (user, pass) => {
  return {
    type: SIGNUP,
    payload: firebase.auth().createUserWithEmailAndPassword(user, pass)
  };
};
