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
  headerMiddle : {
  },
  headerRight : {
  },
  body : {
    flex : 10,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: Color.lightpurple
  },
  initialText: {
    fontSize: 20,
    padding: 30
  },
  inputText: {
    height: 40,
    minWidth : 180,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    color: Color.purple,
    backgroundColor: Color.lightpurple,
    borderRadius: 10,
    marginTop: 10,
    fontSize: 20,
  },
  footer: {
    flex: 1,
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
  }
})

export default styles