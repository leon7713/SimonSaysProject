import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const CurrentScore = () => {

  const state = useSelector(state => state);

  return <Text style={styles.appButtonText}>Current score: {state.score}</Text>;
};

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 18,
    alignSelf: "center"
  }
});

export default CurrentScore;