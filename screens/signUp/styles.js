import { StyleSheet } from 'react-native';
import Color from '../../source/utils/Colors';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/541;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.purple,
      justifyContent: 'center',
      alignItems : 'center'
    },
    inputText: {
        minHeight: 40,
        maxHeight: 40,
        minWidth : 180,
        maxWidth: 180,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 15,
        color: Color.purple,
        backgroundColor: Color.lightpurple,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 20,
      },
      logo: {
        height: 200,
        width: 160,
        backgroundColor: Color.purple,
        alignItems: 'center',
        justifyContent: 'center',
      },
      IconImage: {
        width: win.width,
        height: 362 * ratio,
        resizeMode: 'contain',
      },
      MenuOptions: {
        alignItems: 'center',
      }
  });

export default styles