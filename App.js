import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ButtonElem from './src/components/ButtonElem.js';
import StartBtn from './src/components/StartBtn.js';
import CurrentScore from './src/components/CurrentScore.js';
import store from './src/redux/store.js';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <ButtonElem color="red" id={0} />
        <ButtonElem color="blue" id={1} />
        <ButtonElem color="green" id={2} />
        <ButtonElem color="orange" id={3} />
        {/* Notify text */}
        <StartBtn />
        <CurrentScore />
      </SafeAreaView>
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
