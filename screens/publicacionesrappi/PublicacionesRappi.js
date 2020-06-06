import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const PublicacionesRappi = ({ navigation }) => {
  return (
   <View style={styles.container}>
     <Text>{'Estas en Publicaciones Rappi, '}</Text>
     <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('Transferencia')}>
         <Text style={styles.textButton} >Transferencia</Text>
     </TouchableHighlight>
   </View>
 );
}

export default PublicacionesRappi