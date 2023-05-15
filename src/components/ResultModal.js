import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Modal from "react-native-modal";
import { useSelector, useDispatch } from 'react-redux';
import { setResultModal, saveName } from '../redux/action';

export default () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [isShown, setIsShown] = useState(true);
  let names = state.names;
  const [newNames, setNewNames] = useState("");


  const _onPress = () => {
    names.push(text);
    dispatch(saveName(names));
    console.log("names:", state.names);
    setNewNames(state.names);
    setText("");
  }

  return (
    <Modal isVisible={state.resultModal}>
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, alignSelf: 'center', color: "red" }}>Wrong answer!</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Enter name:</Text>
        <TextInput style={{ borderColor: 'gray', borderWidth: 1, height: 40 }} onChangeText={newText => setText(newText)}
          defaultValue={text}></TextInput>
        <Button title="Save" onPress={_onPress} />
        <Button title="Hide" onPress={() => dispatch(setResultModal(false))} />
        {isShown ? <View style={{ flex: 1, padding: 50, }}>
          {newNames.map((person) => {
            return (
              <View>
                <Text style={{
                  padding: 20, fontSize: 15, marginTop: 5
                }}>{person.name}</Text>
              </View>
            );
          })}
        </View> : null}
      </View>
    </Modal>
  );
};