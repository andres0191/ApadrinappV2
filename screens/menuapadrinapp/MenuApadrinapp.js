import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const MenuApadrinapp = ({ navigation }) => {
  return (
   <View style={styles.container}>
     <Image source={require('../../assets/apadrina.png')} style={styles.logo}
        />
     <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('PublicacionesRappi')}>
         <Text style={styles.textButton} >Lista de ahijados</Text>
     </TouchableHighlight>
     <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('EstadoCuenta')}>
         <Text style={styles.textButton} >Estado de la cuenta</Text>
     </TouchableHighlight>
   </View>
 );
}

export default MenuApadrinapp