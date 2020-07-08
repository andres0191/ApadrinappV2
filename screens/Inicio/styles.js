import Color from '../../source/utils/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.purple,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        height: 200,
        width: 160,
      },
      MenuOptions: {
        flexDirection: 'row'
      }
});

export default styles;