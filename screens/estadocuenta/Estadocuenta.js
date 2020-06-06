import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const EstadoCuenta = ({ navigation }) => {
   return (
    <View style={styles.container}>
      <Text>{'Estas en EstadoCuenta, '}</Text>
      <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.textButton} >Next</Text>
      </TouchableHighlight>
    </View>
  );
}

export default EstadoCuenta