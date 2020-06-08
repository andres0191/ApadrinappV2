import React from 'react'
import Color from '../../source/utils/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.purple,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      paddingVertical: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      marginTop: 10,
    },
    textButton: {
      textAlign: 'center',
    },
    next: {
      backgroundColor: 'green'
    },
    logo: {
      height: 200,
      width: 160,
    },
    MenuOptions: {
      flexDirection: 'row'
    }
  });

export default styles