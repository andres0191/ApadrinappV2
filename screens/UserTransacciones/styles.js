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
    paddingTop: 22,
  },
  headerLeft : {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 10,
    paddingBottom: 12,
    backgroundColor: Color.lightpurple,
    marginTop: -7,
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
    margin: 10,
    padding: 10,
    height: 20,
    width: 20,

  },
  body : {
    flex : 10,
    flexDirection: 'column',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: Color.lightpurple,
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
  info: {
    width: win.width,
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -31,
  },
  footer: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.purple
  },
  InputInfo: {
    flex: .5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  YellowFont: {
    marginBottom: -8,
    fontSize: 26,
    fontWeight: "bold",
    color: Color.yellow,
  },
  inputText: {
    borderColor: Color.purple,
    minWidth: 235,
    minHeight: 70,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
    fontSize: 44,
    color: Color.purple,
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
  AllBoxes: {
    backgroundColor: Color.lightpurple
  },
  Boxes: {
    padding: 30,
    backgroundColor: Color.purple,
    width: win.width/1.05,
    margin: 5,
    borderColor: Color.lightpurple,
    borderRadius: 20,
  },
  ItemName: {
    fontSize: 30,
    color: Color.white,
    fontWeight: "bold"
  },
  ItemMonto: {
    fontSize: 18,
    color: Color.grey,
    fontWeight: "bold"
  },
  ItemDate: {
    color: Color.grey,
    fontSize: 24,
    marginTop: 10
  }
})

export default styles