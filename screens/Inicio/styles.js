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
        height: 240,
        width: 200,
      },
      MenuOptions: {
        flexDirection: 'column',
        margin : -30,
        justifyContent :  'flex-start'
      },
});

export default styles;