import { StyleSheet } from 'react-native';
import Color from '../../source/utils/Colors';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/541;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor : Color.grey
  },
  header : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
    marginTop : 30,
    backgroundColor: 'red'
  },
  headerLeft : {
    flex : 1,
    backgroundColor: 'green'
  },
  headerRight : {
    flex: 1,
    marginRight : 10,
    backgroundColor: 'blue'
  },
  body : {
    flex : 10,
    alignItems : 'center',
    justifyContent : 'stretch'
  },
  logo : {
    width: win.width,
    height: 362 * ratio,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
  },
  footer : {
    flex : 1.5,
    flexDirection : 'row'
  },
  flex : {
    flex : 1
  },
  textColor : {
    color : Color.black
  }
})

export default styles