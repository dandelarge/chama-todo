import React from 'react';
import TodoItem from '../containers/todo_item';

const TodoList = function({todoList}) {

  const TodoItems = todoList.map((todo, index) => {
    return <TodoItem todo={todo} key={index}></TodoItem>
  });

  //TODO: Change this to propper syntax!
  if(!todoList.length) return <h3>No todos yet</h3>;
  return (
    <ul>
      {TodoItems}
    </ul>
  );

}

export default TodoList;
