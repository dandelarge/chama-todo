import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../components/todo_list';
import { addTodo, fetchTodos } from '../actions/';


class Todos extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTodos();
    console.log(this.props.todoList);
    this.state = {text: ''};
  }

  render() {
    return (
      <div className="the-todo-list">
        {/*
          this guy below was originally a text input, but I am lazy so added a
          form so I can listen to the submit event and by consecuence, get it to
          work with either return key or add button.
          Pd. wtf JSX? these comments look weird!
        */}
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.addTodo(e.target.newTodo.value, this.props.todoList.length);
          this.setState({text: ''});
          this.props.fetchTodos();
        }}>
          <div className="mdl-textfield mdl-js-textfield newTodo-textfield">
          <input
            className="mdl-textfield__input "
            placeholder=" What needs to be done?"
            type="text"
            id="newTodo"
            name="newTodo"
            value={this.state.text}
            onChange={event =>
              this.setState({text:event.target.value})
            }
          />
          </div>
          <button type="submit"
            className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
            <i className="material-icons">+</i>
          </button>
        </form>
        <TodoList></TodoList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {todoList: state.todos};
};

const mapsDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addTodo, fetchTodos
    }, dispatch);
};

export default connect(mapStateToProps, mapsDispatchToProps)(Todos);
