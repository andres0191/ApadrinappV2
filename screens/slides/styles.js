import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../source/utils/Colors.js'


const win = Dimensions.get('window');
const ratio = win.width/541;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.purple,
      alignItems: 'flex-end',
      //justifyContent: 'center',
    },
    body : {
      flex : 6,
      flexDirection : 'column',
    },
    footer : {
      flex : 3,
    },
    ImageBack : {
      flex: 3,
      flexDirection : 'row',
      justifyContent : 'center'
    },
    parragraph : {
      flex : 0.8,
      justifyContent : 'center',
      padding : 40,
      paddingTop : 80,
      fontSize : 20,
      color : Colors.white

    },
    bttn : {
      flex : 2,
    },
    logo : {
      width: win.width,
      height: 362 * ratio,
      resizeMode: 'contain',
    },
  });

export default styles