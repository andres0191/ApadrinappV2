import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const Transferencia = ({ navigation }) => {
  return (
   <View style={styles.container}>
     <Text>{'Estas en Transferencia, '}</Text>
     <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('MenuApadrinapp')}>
         <Text style={styles.textButton} >Menu Apadrinapp</Text>
     </TouchableHighlight>
     <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('EstadoCuenta')}>
         <Text style={styles.textButton} >Estado de la cuenta</Text>
     </TouchableHighlight>
   </View>
 );
}

export default Transferencia