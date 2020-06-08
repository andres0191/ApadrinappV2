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
    flex : 10,
    flexDirection: 'column',
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
    marginTop: -500,
  },
  HeaderText: {
    fontSize: 38,
    color: Color.purple,
    marginTop: -10,
  },
  estadoCuenta: {
    width: 100,
    height: 100,
    marginTop: -360,
    marginRight: 180,
    backgroundColor: Color.yellow,
    borderRadius: 20,
  },

})

export default styles