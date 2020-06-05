import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

const StatusCount = () => {
   return (
    <View style={styles.container}>
      <Text>{'Estas en estado de cuenta'}</Text>
    </View>
  );
}

export default StatusCount