import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo list</h2>
        <Todos />
      </div>
    );
  }
}

export default App;
