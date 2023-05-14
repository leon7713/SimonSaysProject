import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const CurrentScore = () => {

  const numbers = useSelector(state => state.numbers);

  return <Text style={styles.appButtonText}>Current score: {numbers.length}</Text>;
  
  //map((item, index) =>
  //  <Text style={styles.appButtonText} key={index}>Current score: {item.id}</Text>);
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "white",
    margin: 30
  },
  appButtonText: {
    fontSize: 18,
    alignSelf: "center",
  }
});

export default CurrentScore;