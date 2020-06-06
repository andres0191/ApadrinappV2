import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const Start = () => {
   return (
    <View style={styles.container}>
      <Text>{'Bienvenido a Start !'}</Text>
    </View>
  );
}

export default Start