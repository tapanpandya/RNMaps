import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const HomeSearch = () => {
  return (
    <View>
      {/* {Input box} */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </View>
      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#535353'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/* Home destinations */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
