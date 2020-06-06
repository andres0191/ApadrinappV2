import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const Main = () => {
   return (
    <View style={styles.container}>
      <Text>{'Bienvenido a APADRINAPP !'}</Text>
    </View>
  );
}

export default Main