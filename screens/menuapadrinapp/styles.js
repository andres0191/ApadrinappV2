import React from 'react';
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
    backgroundColor : Color.grey
  },
  body : {
    flex : 3,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: Color.grey,
  },
  logo : {
    width: win.width,
    height: 378* ratio,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginTop: -7,
  },
  footer: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    fontSize: 38,
    color: Color.purple,
    flexDirection: 'row',
    margin: 10,
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
    backgroundColor: Color.yellow,
    borderRadius: 20,
  },
  ApadrinaStyle: {
    width: 120,
    height: 120,
    margin: 30,
    backgroundColor: Color.lightpurple,
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
  }

})

export default styles