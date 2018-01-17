import React, { Component } from 'react';
import TodoList from './todo_list';
import TodoModel from './todo_model';

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {data: [], text: ''};

    // I need to bind this context to the updateList Method so
    // it knows about state. Otherwise: "cannot read state of undefined"
    this.updateList = this.updateList.bind(this);
    this.toggletodo = this.toggletodo.bind(this);
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
        <form onSubmit={this.updateList}>
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
        <TodoList todoList={this.state.data} toggletodo={this.toggletodo}></TodoList>
      </div>
    );
  }

  updateList(e) {
    e.preventDefault();

    const todo = new TodoModel(false, e.target.newTodo.value);
    this.state.data.push(todo);
    this.setState({data: this.state.data, text: ''});
  }

  toggletodo(todo) {
    const objectIndex = this.state.data.findIndex(item => item.dateCreated === todo.dateCreated);

    const newData = this.state.data;
    newData[objectIndex].done = !todo.done;
    this.setState({data: newData});
  }
}
