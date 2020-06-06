import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import Button from '../../source/Components/Button';
import firebaseService from '../../services/firebase';

const EstadoCuenta = ({ navigation }) => {
   return (
    <View style={styles.container}>
      <Text>{'Estas en EstadoCuenta, '}</Text>
      <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('MenuApadrinapp')}>
          <Text style={styles.textButton} >Menu MenuApadrinapp</Text>
      </TouchableHighlight>
      <Button>esesesesesese</Button>
    </View>
  );
}

export default EstadoCuenta