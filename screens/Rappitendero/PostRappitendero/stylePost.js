import { StyleSheet } from 'react-native';
import Color from '../../../source/utils/Colors';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/550;
const styles = StyleSheet.create({

  container : {
    flex: 1,
    flexDirection : 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor : Color.grey,
  },
  header : {
    flex : 1,
    paddingTop: 22,
    paddingBottom : 40,
    backgroundColor: Color.lightpurple
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
  PageTitle: {
    fontFamily: '',
    fontSize: 18,
    color: Color.purple,
  },
  titulo : {
    justifyContent : 'center',
    fontSize: 28,
    color: Color.yellow
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
    height: 280 * ratio,
    justifyContent: 'center',
  },
  ElevatePic: {
    elevation: 2,
    marginBottom: -10
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
  },
  footer: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.purple,
    position: 'absolute',
    bottom: 0,
    width: win.width,
    
  },
  InputInfo: {
    flex: .5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  YellowFont: {
    marginBottom: -8,
    fontSize: 17,
    fontWeight: "bold",
    color: Color.yellow,
  },
  AllBoxes: {
    backgroundColor: Color.lightpurple,
    marginTop: -30,
  },
  Boxes: {
    padding: 10,
    backgroundColor: Color.purple,
    width: win.width/1.05,
    margin: 10,
    borderColor: Color.yellow,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 10,
    
  },
  boxTime: {
    marginBottom: 80,
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
  ItemDescription: {
    color: Color.grey,
    fontSize: 24,
    marginTop: 10
  },
  buttons : {
    justifyContent : 'space-evenly'
  },
  publicationValidity: {
    fontSize: 20,
    color: Color.yellow,
    alignItems: 'center',
  },
  passedTime: {
    color: Color.grey,
    fontSize: 16,
    fontWeight: "bold"
  }
})

export default styles