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
  header : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor: 'red'
  },
  headerLeft : {
    flex : 1,
    backgroundColor: 'green'
  },
  headerRight : {
    flex: 1,
    backgroundColor: 'blue'
  },
  body : {
    flex : 10,
    flexDirection: 'column',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: Color.lightpurple
  },
  logo : {
    width: win.width,
    height: 362 * ratio,
    resizeMode: 'contain',
    justifyContent: 'center',
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
    backgroundColor: 'brown'
  },
  textColor : {
    color : Color.black
  }
})

export default styles