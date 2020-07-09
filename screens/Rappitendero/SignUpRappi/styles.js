import { StyleSheet } from 'react-native';
import Color from '../../../source/utils/Colors';
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
    logoH : {
      height : 100
    },
    inputText: {
        height: 40,
        minWidth : 180,
        borderWidth: 1,
        borderColor: Color.yellow,
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
        height: 150 * ratio,
        resizeMode: 'contain',
      },
      MenuOptions: {
        paddingTop : 40,
        alignItems: 'center',
      },
      // bottony : {
      //   paddingTop : 10
      // }
  });

export default styles