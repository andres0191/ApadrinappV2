import { StyleSheet } from 'react-native';
import Color from '../../source/utils/Colors';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/541;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection : 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor : Color.lightpurple,
  },
  header : {
    flex : 1,
  },
  headerLeft : {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 10,
    paddingBottom: 12,
    backgroundColor: Color.lightpurple,
    marginTop: 25,
  },
  headerMiddle : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -32,
  },
  headerRight : {
    flex: 1,
  },
  PageTitle: {
    fontFamily: '',
    fontSize: 18,
    color: Color.purple,
  },
  body : {
    flex : 10,
    flexDirection: 'column',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: Color.lightpurple,
    width: win.width,
    marginTop: -31,
  },
  logo : {
    width: win.width,
    height: 475* ratio,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginTop: -7,
  },
  ElevatePic: {
    elevation: 2,
  },
  InfoCube: {
    flexDirection : 'row',
    width: win.width,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.purple,
    marginTop: 28,
  },
  InputInfo: {
    flex: .5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  YellowFont: {
    marginBottom: -8,
    fontSize: 22,
    fontWeight: 'bold',
    color: Color.yellow,
    marginTop: -21,
  },
  textPurple: {
    fontWeight: "bold",
    fontSize: 35,
    paddingVertical: 10,
    color: Color.purple
  },
  inputText: {
    borderColor: Color.purple,
    minWidth: 200,
    maxWidth: 200,
    minHeight: 50,
    maxHeight: 50,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
    fontSize: 35,
    color: Color.purple,
    paddingHorizontal: 10,
    fontWeight: "bold",
    marginTop: 10,
  },
  ItemMonto: {
    color: Color.white,
    fontSize: 20
  }
})

export default styles