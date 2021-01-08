import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.mianContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
        <View style={styles.box4} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mianContainer: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  box1: {
    padding: 20,
    backgroundColor: 'navy',
  },
  box2: {
    padding: 20,
    backgroundColor: 'yellow',
  },
  box3: {
    padding: 20,
    backgroundColor: 'green',
  },
  box4: {
    padding: 20,
    backgroundColor: 'teal',
  },
});

export default App;
