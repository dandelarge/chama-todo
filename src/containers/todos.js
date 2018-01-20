import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../components/todo_list';
import { addTodo } from '../actions/';


class Todos extends Component {
  constructor(props) {
    super(props);

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
        }}>
          <input
            type="text"
            name="newTodo"
            value={this.state.text}
            onChange={event =>
              this.setState({text:event.target.value})
            }
          />
          <input type="submit" value="add"/>
        </form>
        <TodoList todoList={this.props.todoList}></TodoList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {todoList: state.todos};
};

const mapsDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addTodo: addTodo,
    }, dispatch);
};

export default connect(mapStateToProps, mapsDispatchToProps)(Todos);