import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import ReduxPromise from 'redux-promise'

import './material.min.css';
import './material.min';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoApp from './reducers'
import Login from './containers/login'
import LoginCheck from './containers/login_check'
import fbconfig from './firebase_config';

firebase.initializeApp(fbconfig);

const createStoreWithMidleware = applyMiddleware(ReduxPromise)(createStore);

firebase.auth().onAuthStateChanged(user => console.log(user));

ReactDOM.render(
  <Provider store={
    createStoreWithMidleware(TodoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }>
    <BrowserRouter>
        <Switch>
          <Route path="/app" component={App}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={LoginCheck}></Route>
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
