import { ADD_TODO, TOGGLE_TODO, FETCH_TODOS , REMOVE_TODO} from '../actions';

const todos = (state, action) => {

  state = state || [];
  const index = state.findIndex(todo => todo.id === action.id);

  switch(action.type) {
    case FETCH_TODOS:
      return action.payload.val() || [];
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
      state[index].done = !state[index].done;
      action.payload.set(state[index].done);
      return state;
    case REMOVE_TODO:
      state.splice(index, 1);
      action.payload.set(state);
      return state;
    default:
      return state;
  }
};

export default todos;
