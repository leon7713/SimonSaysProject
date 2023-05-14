export const ADD_TODO = "ADD_TODO";
export const SET_NUMBERS = "SET_NUMBERS";
export const CLEAR_NUMBERS = "CLEAR_NUMBERS";
export const SET_BUTTON_STATE = "SET_BUTTON_STATE";
export const CLEAR_BUTTON_STATES = "CLEAR_BUTTON_STATES";

let todoId = 0;

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    id: ++todoId,
    task
  }
});

export const setNumbers = (numbers) => ({
  type: SET_NUMBERS,
  payload: numbers
});

export const clearNumbers = () => ({
  type: CLEAR_NUMBERS,
  payload: {}
});

export const setButtonState = (buttonId) => ({
  type: SET_BUTTON_STATE,
  payload: buttonId
});

export const clearButtonStates = () => ({
  type: CLEAR_BUTTON_STATES,
  payload: {}
});