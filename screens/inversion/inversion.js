import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';
import PurpleButton from '../../source/Components/PurpleButton';
import firebaseService from '../../services/firebase';

const Inversion = ({ navigation }) => {
   return (
    <View style={styles.container}>
      <Text>{'Estas en Inversiones, '}</Text>
      <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.textButton} >Next</Text>
      </TouchableHighlight>
      <PurpleButton></PurpleButton>
    </View>
  );
}

export default Inversion