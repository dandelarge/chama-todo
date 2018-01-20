import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoApp from './reducers'
import Login from './containers/login'
import LoginCheck from './containers/login_check'

const store = createStore(TodoApp,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
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
