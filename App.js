import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/store.js';

import { ButtonElem, StartBtn, ResultModal, CurrentScore } from './src/components';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>

        <SafeAreaView style={styles.container}>
          <ButtonElem color="red" id={0} />
          <ButtonElem color="blue" id={1} />
          <ButtonElem color="green" id={2} />
          <ButtonElem color="orange" id={3} />
          <StartBtn />
          <CurrentScore />
          <ResultModal />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
});
export default App;
