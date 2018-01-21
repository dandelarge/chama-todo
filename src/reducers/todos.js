import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS } from '../actions';

const todos = (state, action) => {

  state = state || [];

  switch(action.type) {
    case ADD_TODO:
    console.log(action, state);
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          done: false,
          dateCreated: Date.now()
        }
      ];
    case TOGGLE_TODO:
      console.log(action.id, state);
      const index = state.findIndex(todo => todo.id === action.id);
      state[index].done = !state[index].done;
      action.payload.set(state[index].done);
      return state;

    case FETCH_TODOS:
      state = action.payload.val();
    default:
      return state;
  }
};

export default todos;
