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
    backgroundColor : Color.lightpurple,

  },
  header : {
    flex : .1,
    paddingTop: 22,
    marginBottom: -90,
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
  body : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'flex-end',
    //backgroundColor: Color.lightpurple,
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
    alignContent : 'center',
    fontSize: 38,
    color: Color.white,
    flexDirection: 'row',
    paddingLeft: 140,
  },
  estadoCuenta: {
    justifyContent : 'center',
    width: 120,
    height: 120,
    margin: 30,
    backgroundColor: Color.yellow,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  MoneyStyle: {
    justifyContent : 'center',
    width: 120,
    height: 120,
    margin: 30,
    backgroundColor: Color.purple,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  imageMenu : {
    paddingLeft : 50,
    alignItems : 'center',
    width: 110,
    height: 110,
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
    color: Color.white
  },
  ElevatePic: {
    elevation: 2,
  }
})

export default styles