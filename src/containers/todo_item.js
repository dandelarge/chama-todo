import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo, fetchTodos } from '../actions'

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {done: this.props.todo.done}
  }

  render(){
    return(
      <li className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
        <strong>{this.props.todo.text }</strong>
        <span className="small-space"> {this.props.todo.done ? ' is Done!': ' Needs to be done'} </span>
      </span>
      <span className="mdl-list__item-secondary-action">
        <label className="mdl-switch mdl-js-switch" htmlFor={this.props.todo.id}>
        <input
          id={this.props.todo.id}
          className="mdl-switch__input"
          type="checkbox"
          onChange={event => {
            this.props.toggleTodo(this.props.todo.id);
            this.setState({done: this.props.todo.done});
            this.props.fetchTodos();
          }}
          checked={this.state.done}
        />
        </label>
      </span>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleTodo, fetchTodos }, dispatch);
};

export default connect(null, mapDispatchToProps)(TodoItem);
