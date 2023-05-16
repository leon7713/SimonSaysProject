import {
  SET_NUMBERS,
  CLEAR_NUMBERS,
  SET_BUTTON_STATE,
  CLEAR_BUTTON_STATES,
  SET_CURRENT_POSITION,
  BLOCK_BTN, ADD_SCORE,
  SET_RESULT_MODAL,
  SAVE_NAMES
} from "./action";

const initialState = {
  numbers: [],
  buttonStates: [
    { button: 0, state: 0 },
    { button: 1, state: 0 },
    { button: 2, state: 0 },
    { button: 3, state: 0 },
  ],
  currentPosition: 0,
  score: 0,
  isBlockedBtn: false,
  resultModal: false,
  top: [{ name: 'God', score: 1000000 }],
  names: []
};

const compareFn = (a, b) => {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;

  return 0;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBERS: {
      return {
        ...state,
        numbers: action.payload
      };
    }

    case SAVE_NAMES: {
      let newTop = state.top;
      newTop.sort(compareFn);

      if (newTop.length < 10 || (state.top.length == 10 && state.top[9].score < action.payload.score)) {
        newTop = [...newTop, action.payload];
      }

      newTop.sort(compareFn);
      newTop = newTop.slice(0, 10);

      return {
        ...state,
        top: newTop
      };
    }

    case BLOCK_BTN: {
      return {
        ...state,
        isBlockedBtn: action.payload
      };
    }

    case ADD_SCORE: {
      return {
        ...state,
        score: action.payload
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
          if (x.button == action.payload) return { button: x.button, state: 1 }

          return { button: x.button, state: 0 }
        })
      };
    }

    case CLEAR_BUTTON_STATES: {
      return {
        ...state,
        buttonStates: state.buttonStates.map(x => ({ ...x, state: 0 }))
      };
    }

    case SET_CURRENT_POSITION: {
      return {
        ...state,
        currentPosition: action.payload
      };
    }

    case SET_RESULT_MODAL: {
      return {
        ...state,
        resultModal: action.payload
      };
    }

    default:
      return state;
  }
}

export default reducer;