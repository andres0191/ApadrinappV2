import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const MenuApadrinapp = () => {
   return (
    <View style={styles.container}>
      <Text>{'Bienvenido a MenuApadrinapp !'}</Text>
    </View>
  );
}

export default MenuApadrinapp