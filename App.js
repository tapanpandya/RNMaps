import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
