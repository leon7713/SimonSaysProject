export const SET_NUMBERS = "SET_NUMBERS";
export const CLEAR_NUMBERS = "CLEAR_NUMBERS";
export const SET_BUTTON_STATE = "SET_BUTTON_STATE";
export const CLEAR_BUTTON_STATES = "CLEAR_BUTTON_STATES";
export const BLOCK_BTN = "BLOCK_BTN";
export const ADD_SCORE = "ADD_SCORE";
export const SET_RESULT_MODAL = "SET_RESULT_MODAL";
export const SET_CURRENT_POSITION = "SET_CURRENT_POSITION";
export const SAVE_NAMES = "SAVE_NAME";

export const setNumbers = (numbers) => ({
  type: SET_NUMBERS,
  payload: numbers
});

export const saveName = (player) => ({
  type: SAVE_NAMES,
  payload: player
});

export const blockBtn = (value) => ({
  type: BLOCK_BTN,
  payload: value
});

export const addScore = (value) => ({
  type: ADD_SCORE,
  payload: value
});

export const clearNumbers = () => ({
  type: CLEAR_NUMBERS,
  payload: {}
});

export const setButtonState = (buttonId) => ({
  type: SET_BUTTON_STATE,
  payload: buttonId
});

export const setCurrentPosition = (position) => ({
  type: SET_CURRENT_POSITION,
  payload: position
});

export const clearButtonStates = () => ({
  type: CLEAR_BUTTON_STATES,
  payload: {}
});

export const setResultModal = (show) => ({
  type: SET_RESULT_MODAL,
  payload: show
});