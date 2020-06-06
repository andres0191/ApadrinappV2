import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const MenuApadrinapp = ({ navigation }) => {
  return (
   <View style={styles.container}>
     <Text>{'Estas en Menu Apadrinapp, '}</Text>
     <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('PublicacionesRappi')}>
         <Text style={styles.textButton} >Lista de ahijados</Text>
     </TouchableHighlight>
     <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('Transferencia')}>
         <Text style={styles.textButton} >Estado de la cuenta</Text>
     </TouchableHighlight>
   </View>
 );
}

export default MenuApadrinapp