import { ADD_TODO, SET_NUMBERS, CLEAR_NUMBERS, SET_BUTTON_STATE, CLEAR_BUTTON_STATES } from "./action";

const initialState = {
  numbers: [],
  buttonStates: [
    {button: 0, state: 0 },
    {button: 1, state: 0 },
    {button: 2, state: 0 },
    {button: 3, state: 0 },
  ],
  currentPosition: 0,
  score: 0,
  userActionRequired: false
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBERS: {
      return {
        ...state,
        numbers: action.payload
      };
    }

    case CLEAR_NUMBERS: {
      return {
        ...state,
        numbers: []
      };
    }

    case SET_BUTTON_STATE: {
      return {
        ...state,
        buttonStates: state.buttonStates.map(x => {
          if(x.button == action.payload) return { button: x.button, state: 1 }

          return { button: x.button, state: 0 }
        })
      };
    }

    case CLEAR_BUTTON_STATES: {
      return {
        ...state,
        buttonStates: state.buttonStates.map(x => ({ ...x, state: 0}))
      };
    }

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