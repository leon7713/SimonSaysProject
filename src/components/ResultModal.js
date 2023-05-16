import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Modal from "react-native-modal";
import { useSelector, useDispatch } from 'react-redux';
import { setResultModal, saveName, addScore } from '../redux/action';

export default () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [resultSaved, setResultSaved] = useState(false);

  const top = state.top;
  const showPlayerForm = (top.length < 10 || (top.length == 10 && top[9].score < state.score)) ? true : false;

  useEffect(() => {
    setResultSaved(false);

  }, [state.resultModal])

  const saveButtonHandler = () => {
    const newTopPlayer = { name: text, score: state.score };
    dispatch(saveName(newTopPlayer));
    setResultSaved(true);

    setText("");
  }

  const closeButtonHandler = () => {
    dispatch(setResultModal(false));
    dispatch(addScore(0));
  }

  return (
    <Modal isVisible={state.resultModal}>
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
        {showPlayerForm && !resultSaved &&
          <>
            <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center', color: "red" }}>Wrong answer!</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Enter your name:</Text>
            <TextInput style={{ borderColor: 'gray', borderWidth: 1, height: 40, marginBottom: 20 }} onChangeText={newText => setText(newText)}
              defaultValue={text}></TextInput>
            <Button title="Save" onPress={saveButtonHandler} />
          </>}
        {resultSaved && <Text>Your result saved</Text>}

        <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center', color: "green", marginTop: 20 }}>BEST RESULTS:</Text>
        <View style={{ flex: 1, padding: 10, alignSelf: 'center' }}>
          {state.top.map((person) => {
            return (
              <View>
                <Text style={{ padding: 5, fontSize: 15, marginTop: 5, fontWeight: 'bold', textTransform: 'uppercase' }}>{person.name} - {person.score}</Text>
              </View>
            );
          })}
        </View>
        <Button title="Hide" onPress={closeButtonHandler} />
      </View>
    </Modal>
  );
};