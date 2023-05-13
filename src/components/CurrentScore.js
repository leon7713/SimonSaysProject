import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const CurrentScore = () => {
  return (

        <Text style={styles.appButtonText}>Current score: </Text>
  );
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