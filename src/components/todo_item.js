import React from 'react';

const TodoItem = function(props) {
  return(
    <li>
      <input
        type="checkbox"
        value={props.todo.done}
        onClick={event => props.toggletodo(props.todo)}
      />
      <strong>{props.todo.text}</strong>
      {String(props.todo.done)}
    </li>
  );
}

export default TodoItem;
