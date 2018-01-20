import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Todos from './containers/todos';

const App = withRouter(({history, user})=>{
  console.log(user);
  if(!user.loggedIn) {
    history.push('/login')
  }
    return (
      <div className="App">
        <h2>Todo list</h2>
        <Todos />
      </div>
    );
});

const mapStateToProps = state => {
  return { user: state.user };
}

export default connect(mapStateToProps)(App);
