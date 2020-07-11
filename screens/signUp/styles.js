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
        minHeight: 50,
        maxHeight: 50,
        minWidth: 250,
        maxWidth: 250,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 15,
        color: Color.purple,
        backgroundColor: Color.lightpurple,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 20,
      },
      PassIn: {
        minHeight: 50,
        maxHeight: 50,
        minWidth: 250,
        maxWidth: 250,
        borderWidth: 1,
        borderColor: Color.yellow,
        paddingHorizontal: 15,
        backgroundColor: Color.lightpurple,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
      },
      PassText: {
        fontSize: 20,
        color: Color.purple,
      },
      Eye: {
        height: 25,
        width: 40,
        marginLeft: -122
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
        height: 150 * ratio,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
      },
      MenuOptions: {
        alignItems: 'center',
      }
  });

export default styles