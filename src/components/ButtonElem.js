import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const ButtonElem = (props) => {
  const buttonId = props.id;

  const [task, setTask] = React.useState('');
  
  const state = useSelector(state => state);
  const buttonStates = useSelector(state => state.buttonStates);
  const buttonState = buttonStates.find(x => x.button == buttonId).state


  const dispatch = useDispatch();


  const onPress = () => {
    dispatch(addTodo(task))

    const currentPosition = state.currentPosition;
    const numbers = state.numbers;

    if(numbers[currentPosition] == buttonId) {
      alert('success')
    }
    else {
      alert('fail')
    }

    // 
    // numbers
    // current position 
    // score

    //if(numbers[currentPosition] == buttonId && currentPosition == score) score++;

    //if(numbers[currentPosition] == buttonId && currentPosition < score) currentPosition++;

    // if(numbers[currentPosition] != buttonId) score = 0;


    setTask('')
  }

  return (
    <TouchableOpacity style={styles(props.color, buttonState).appButtonContainer} onPress={onPress}>
      <Text style={styles.appButtonText}></Text>
      {/* <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <Text>{item.id}</Text>
          );
        }}
      /> */}
      
    </TouchableOpacity>
  );
};

const styles = (color, buttonState) => StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: color,
    margin: 30,
    opacity: (buttonState == 1 ? 1 : 0.2)
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default ButtonElem;