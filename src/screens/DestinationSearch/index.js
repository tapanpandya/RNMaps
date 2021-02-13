import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        styles={{textInput: styles.textInput}}
        placeholder="From?"
        onPress={(data, details = null) => {
          setOriginPlace({data, details});
          console.log(data, details);
        }}
        fetchDetails
        query={{
          key: 'AIzaSyDcPI1_TdYdbzbYjuwjckJ6TKgQvWVXn8E',
          language: 'en',
        }}
      />

      <GooglePlacesAutocomplete
        styles={{textInput: styles.textInput}}
        placeholder="Where to?"
        onPress={(data, details = null) => {
          setDestinationPlace({data, details});
          console.log(data, details);
        }}
        fetchDetails
        query={{
          key: 'AIzaSyDcPI1_TdYdbzbYjuwjckJ6TKgQvWVXn8E',
          language: 'en',
        }}
      />
    </View>
  );
};

export default DestinationSearch;
