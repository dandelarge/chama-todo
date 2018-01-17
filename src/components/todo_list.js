import React from 'react';
import TodoItem from './todo_item';

const TodoList = function(props) {

  const TodoItems = props.todoList.map((todo, index) => {
    return <TodoItem todo={todo} key={index} toggletodo={props.toggletodo}></TodoItem>
  });

  //TODO: Change this to propper syntax!
  if(!props.todoList.length) return <h3>No todos yet</h3>;
  return (
    <ul>
      {TodoItems}
    </ul>
  );

}

export default TodoList;
