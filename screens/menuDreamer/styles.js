import { StyleSheet } from 'react-native';
import Color from '../../source/utils/Colors';
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
    flex : .1,
    paddingTop: 22,
    marginBottom: -90
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
    flex : 1,
    alignItems : 'center',
    justifyContent : 'flex-end',
    backgroundColor: Color.grey,
  },
  logo : {
    width: win.width,
    height: 450 * ratio,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.purple,
  },
  HeaderText: {
    fontSize: 38,
    color: Color.purple,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  estadoCuenta: {
    width: 120,
    height: 120,
    margin: 30,
    backgroundColor: Color.yellow,
    borderRadius: 20,
  },
  MoneyStyle: {
    width: 120,
    height: 120,
    margin: 30,
    backgroundColor: Color.purple,
    borderRadius: 20,
  },
  ApadrinaStyle: {
    width: 120,
    height: 120,
    margin: 30,
    backgroundColor: Color.purple,
    borderRadius: 20,
  },
  ConfiaStyle: {
    width: 120,
    height: 120,
    margin: 30,
    backgroundColor: Color.yellow,
    borderRadius: 20,
  },
  flexstyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly",  
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