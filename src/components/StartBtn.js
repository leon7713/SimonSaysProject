import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setNumbers, setButtonState, clearButtonStates, blockBtn } from '../redux/action';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const StartBtn = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const buttonPress = () => {
    dispatch(blockBtn(false));

    let numbers = state.numbers.map(x => x);
    numbers.push(getRandomInt(4));

    dispatch(setNumbers(numbers));

    const timeout = (i, count) => {
      dispatch(clearButtonStates());

      if (i < count) {
        setTimeout(buttonState, 300, i, count);
        dispatch(blockBtn(true));
      }
      else {
        dispatch(blockBtn(false));
      }
    }

    const buttonState = (i, count) => {
      if (i < count) {
        dispatch(setButtonState(numbers[i]));

        setTimeout(timeout, 500, i + 1, count);
      }
    }

    timeout(0, numbers.length);

    const userActionRequired = 0;
  }

  return (
    <TouchableOpacity style={styles(state.isBlockedBtn).appButtonContainer} onPress={buttonPress} disabled={state.isBlockedBtn}>
      <Text style={styles(state.isBlockedBtn).appButtonText}>Start/continue</Text>
    </TouchableOpacity>
  );
};

const styles = (isBlockedBtn) => StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: (isBlockedBtn ? "gainsboro" : "lightgreen"),
    margin: 30,
    marginTop: 100
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default StartBtn;