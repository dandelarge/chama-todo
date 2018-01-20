import { ADD_TODO, TOGGLE_TODO } from '../actions';

const todos = (state, action) => {

  state = state || [
    {
      text: 'get this from db',
      id: 0,
      done: false,
      dateCreated: Date.now()
    },
    {
      text: 'learn well',
      id: 1,
      done: false,
      dateCreated: Date.now() + 1
    }];

  switch(action.type) {
    case ADD_TODO:
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
      const index = state.findIndex(todo => todo.id === action.id);
      state[index].done = !state[index].done;
      return state;
    default:
      return state;
  }
};

export default todos;
