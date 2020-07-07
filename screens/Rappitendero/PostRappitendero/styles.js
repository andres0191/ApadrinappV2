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
    backgroundColor : Color.white,
  },
  header : {
    flex : 1,
    paddingTop: 22, 
    // marginBottom: -90,
    backgroundColor: Color.lightpurple
  },
  headerLeft : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingHorizontal: 10,
    paddingBottom: 12,
    backgroundColor: Color.lightpurple
  },
  // headerMiddle : {
  // },
  // headerRight : {
  // },
  body : {
    flex : 1.5,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: Color.lightpurple
  },
  logo : {
    width: win.width,
    height: 450 * ratio,
    justifyContent: 'center',
  },
  initialText: {
    fontSize: 20,
    justifyContent : 'center',
    textAlign : 'justify',
    // paddingVertical: 10,
    paddingHorizontal: 30
  },
  textW : {
    justifyContent : 'center',
    alignContent : 'center'
  },
  inputText: {
    textAlign : 'center',
    minHeight: 40,
    maxHeight: 40,
    minWidth: 250,
    maxWidth: 250,
    borderWidth: 2,
    borderColor: Color.yellow,
    paddingHorizontal: 15,
    color: Color.purple,
    backgroundColor: Color.purple,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 20,
    //marginLeft: 20,
  },
  inputTextDream: {
    textAlign : 'center',
    minHeight: 150,
    maxHeight: 150,
    minWidth : 250,
    maxWidth: 250,
    borderWidth: 2,
    borderColor: Color.yellow,
    paddingHorizontal: 15,
    color: Color.purple,
    backgroundColor: Color.purple,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 20,
    //margin: 5,
    padding: 5,
  },
  footer: {
    flex: 0.1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.purple
  },
  PageTitle: {
    fontFamily: '',
    fontSize: 18,
    color: Color.purple,
  },
  ElevatePic: {
    elevation: 2, 
  },
  buttons : {
    justifyContent : 'space-evenly'
  }
})

export default styles