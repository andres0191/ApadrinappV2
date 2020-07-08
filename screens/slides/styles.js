import { StyleSheet, Dimensions, Image } from 'react-native';
import Colors from '../../source/utils/Colors.js'


const win = Dimensions.get('window');
const ratio = win.width/541;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: Colors.purple,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      flex: .4,
    },
    body : {
      flex : 3,
    },
    IconImage: {
      width: win.width,
      height: 362 * ratio,
      resizeMode: 'contain',
    },
    CicloImage: {
      width: win.width,
      height: 400 * ratio,
      resizeMode: 'contain',
    },
    footer : {
      flex : 2,
      justifyContent: "center",
      alignItems: 'flex-end'
    },
    parragraph : {
      flex : 0.8,
      justifyContent : 'center',
      paddingHorizontal : 40,
      paddingTop : 40,
      fontSize : 20,
      color : Colors.white
    },
    logo : {
      width: win.width,
      height: 362 * ratio,
      resizeMode: 'contain',
      justifyContent: "center",
      alignItems: 'flex-end'
    }
  });

export default styles