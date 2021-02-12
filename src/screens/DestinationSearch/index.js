import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={fromText}
        onChangeText={setFromText}
        style={styles.textInput}
        placeholder="From"
      />
      <TextInput
        value={destinationText}
        onChangeText={setDestinationText}
        style={styles.textInput}
        placeholder="Where to?"
      />
    </View>
  );
};

export default DestinationSearch;
