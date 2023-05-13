import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const ButtonElem = (props) => {
  const buttonId = props.id;

  const [task, setTask] = React.useState('');
  const todoList = useSelector(state => state.todos);
  const dispatch = useDispatch();


  const onPress = () => {
    dispatch(addTodo(task))
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
    <TouchableOpacity style={styles(props.color).appButtonContainer} onPress={onPress}>
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

const styles = (color) => StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: color,
    margin: 30
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default ButtonElem;