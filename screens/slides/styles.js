import { StyleSheet } from 'react-native';
import Colors from './source/utils/Colors.js'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.purple,
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
  });

export default styles