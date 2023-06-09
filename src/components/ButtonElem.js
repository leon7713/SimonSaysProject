import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addScore, setResultModal, setCurrentPosition, setNumbers } from '../redux/action';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const ButtonElem = (props) => {
  const buttonId = props.id;
  const state = useSelector(state => state);
  const buttonStates = useSelector(state => state.buttonStates);
  const buttonState = buttonStates.find(x => x.button == buttonId).state

  const dispatch = useDispatch();

  const _onPress = () => {

    const currentPosition = state.currentPosition;
    const numbers = state.numbers;
    const score = state.score;

    if (numbers[currentPosition] == buttonId && currentPosition < score) {
      const newCurrentPosition = currentPosition + 1;
      dispatch(setCurrentPosition(newCurrentPosition));
    }
    else if (numbers[currentPosition] == buttonId && currentPosition == score) {
      const newScore = score + 1;
      dispatch(addScore(newScore));
      dispatch(setCurrentPosition(0));
    }
    else {
      dispatch(setResultModal(true));
      dispatch(setCurrentPosition(0));
      dispatch(setNumbers([]));
    }
  }

  return (
    <TouchableOpacity style={styles(props.color, buttonState).appButtonContainer} onPress={_onPress}>
    </TouchableOpacity>
  );
};

const styles = (color, buttonState) => StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 12,
    marginHorizontal: 100,
    backgroundColor: color,
    margin: 30,
    opacity: (buttonState == 1 ? 1 : 0.2)
  }
});

export default ButtonElem;