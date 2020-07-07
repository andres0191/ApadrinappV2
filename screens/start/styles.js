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
      },
      headerLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingHorizontal: 10,
        paddingBottom: 12,
        backgroundColor: Color.purple,
      },
      
});

export default styles;