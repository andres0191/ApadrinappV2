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
    backgroundColor : Color.lightpurple
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
    backgroundColor: Color.lightpurple
  },
  headerMiddle : {
    flex: 1,
  },
  headerRight : {
    flex: 1,
  },
  IntrestBox: {
    margin: 25,
    marginTop: 100
  },
  BigText: {
    color: Color.white,
    fontWeight: "bold",
    fontSize: 37,
  },
  PageTitle: {
    fontFamily: '',
    fontSize: 18,
    color: Color.purple
  },
  body : {
    flex : 10,
    flexDirection: 'column',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: Color.lightpurple,
    marginTop: -55
  },
  logo : {
    width: win.width,
    height: 500 * ratio,
    justifyContent: 'center',
  },
  ElevatePic: {
    elevation: 1
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
    marginTop: 33,
  },
  footer: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.purple,
  },
  InputInfo: {
    flex: .5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  YellowFont: {
    marginBottom: -8,
    fontSize: 26,
    fontWeight: "bold",
    color: Color.yellow,
  },
  inputText: {
    borderColor: Color.purple,
    minWidth: 258,
    minHeight: 70,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 10,
    fontSize: 44,
    color: Color.purple,
    fontWeight: "bold",
    paddingHorizontal: 20
  },
})

export default styles