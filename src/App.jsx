import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet
} from 'react-native';

import Main from './Main';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#4A210D"
      />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF8ED'
  }
});