import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const Main = ({ navigation }) => {
   return (
    <View style={styles.container}>
      <Text>{'Estas en Main!'}</Text>
    </View>
  );
}

export default Main