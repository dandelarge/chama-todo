import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../containers/todo_item';

const TodoList = function({todoList}) {

  const TodoItems = todoList.map((todo, index) => {
    return <TodoItem todo={todo} key={index}></TodoItem>
  });

  if(!todoList.length) {
    return <h3>No todos yet</h3>;
  }
  return (
    <ul className="mdl-list">
      {TodoItems}
    </ul>
  );

}

const mapStateToProps = state => {
  return {todoList: state.todos};
}

export default connect(mapStateToProps)(TodoList);
