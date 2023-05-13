import { ADD_TODO } from "./action";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id } = action.payload
      return {
        ...state,
        todos: [{ id }]
      };
    }
    default:
      return state;
  }
}

export default todoReducer;