import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setNumbers, setButtonState, clearButtonStates } from '../redux/action';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getRandomArrayInt = (count) => {
  let numbers = [];

  for (let i = 0; i < count; i++) {
    numbers.push(getRandomInt(4));
  }

  return numbers;
}



const StartBtn = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const buttonPress = () => {
    if (state.userActionRequired) return;

    const numbers = getRandomArrayInt(state.numbers.length + 1);
    dispatch(setNumbers(numbers))

    //alert(state.numbers);
    //alert(numbers);



    const timeout = (i, count) => {
      dispatch(clearButtonStates());

      if (i < count) {
        setTimeout(buttonState, 300, i, count);
      }
      else {
        // Block start button

      }
    }

    const buttonState = (i, count) => {
      if (i < count) {
        dispatch(setButtonState(numbers[i]))

        setTimeout(timeout, 1000, i + 1, count);
      }
    }

    timeout(0, numbers.length);



    // numbers.forEach(async buttonId => {
    //   //buttonStates.forEach(btn => btn.state = 0);

    //   await new Promise(() => {
    //     setTimeout(() => {
    //       dispatch(setButtonState(buttonId))
    //       //
    //     }, 1000)
    //   })

    // });

    const userActionRequired = 0;
  }

  return (
    <TouchableOpacity style={styles.appButtonContainer} onPress={buttonPress}>
      <Text style={styles.appButtonText}>Start</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "white",
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