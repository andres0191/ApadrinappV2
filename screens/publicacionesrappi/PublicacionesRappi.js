import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const PublicacionesRappi = () => {
   return (
    <View style={styles.container}>
      <Text>{'Bienvenido a PublicacionesRappi !'}</Text>
    </View>
  );
}

export default PublicacionesRappi