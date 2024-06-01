import {AppRegistry} from 'react-native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, World!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default App;
