import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const Transferencia = () => {
   return (
    <View style={styles.container}>
      <Text>{'Bienvenido a Transferencia !'}</Text>
    </View>
  );
}

export default Transferencia