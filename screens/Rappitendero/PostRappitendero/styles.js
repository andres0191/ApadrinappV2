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
    marginBottom: -4,
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
    flex : 1.2,
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
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  inputText: {
    height: 60,
    maxWidth : 300,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    color: Color.purple,
    backgroundColor: Color.lightpurple,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 20,
    padding: 10,
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
    flex : 0.2,
  }
})

export default styles