import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './actions';
import { bindActionCreators } from 'redux';

import './App.css';
import Todos from './containers/todos';

const App = withRouter(({history, user, logout})=>{
  console.log(user);
  if(!user.email) {
    history.push('/login')
  }
    return (
      <div className="App">
        <div><strong>Hello {user.email}</strong>
        <button onClick={e => {
          logout(user.name);
          history.replace('/login');
        }}>logout</button></div>
        <h2>Todo list</h2>
        <Todos />
      </div>
    );
});

const mapStateToProps = state => {
  return { user: state.user };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
