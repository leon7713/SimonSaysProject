import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const buttonPress = () => {
  // Get score from redux
  const score = 5;

  let numbers = [];

  for(let i = 0; i < score; i++) {
    numbers.push(getRandomInt(3));
  }

  // Set numbers to redux

  // Button states
  let buttonStates = [
    {button: 0, state: 0 },
    {button: 1, state: 0 },
    {button: 2, state: 0 },
    {button: 3, state: 0 },
  ]

  numbers.forEach(element => {
    //buttonStates.forEach(btn => btn.state = 0);

    buttonStates.map(x => {
      if(x.button == element) x.state = 1;
      else x.state = 0;
    })

    setTimeout(() => {

    }, 500)

  });

  const userActionRequired = 0;
}

const StartBtn = () => {
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