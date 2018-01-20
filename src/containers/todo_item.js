import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions'

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {done: this.props.todo.done}
  }

  render(){
    return(
      <li>
        <input
          type="checkbox"
          onClick={event => {
            this.props.toggleTodo(this.props.todo.id);
            this.setState({done: this.props.todo.done});
          }}
          value={
            this.state.done
          }
        />
        <strong>{this.props.todo.text}</strong> {String(this.props.todo.done)}
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({toggleTodo: toggleTodo}, dispatch);
};

export default connect(null, mapDispatchToProps)(TodoItem);
