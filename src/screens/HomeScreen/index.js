import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeMap />
      <CovidMessage />
      {/* <Icon name={'rocket'} size={30} /> */}
      <HomeSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
