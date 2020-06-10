import React from 'react';
import { StyleSheet } from 'react-native';
import Color from '../../source/utils/Colors';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');
const ratio = win.width/560;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection : 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor : Color.grey,
  },
  header : {
    flex : .8,
    paddingTop: 22,
    paddingBottom: 10,
  },
  headerLeft : {
    flex : 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    backgroundColor: Color.grey,
    paddingHorizontal: 10,
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
  body : {
    flex : 10,
    flexDirection: 'column',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor: Color.lightpurple,
  },
  logo : {
    width: win.width,
    height: 450 * ratio,
    justifyContent: 'center',
  },
  ElevatePic: {
    elevation: 2,
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
    /*fontFamily: '',*/
    marginBottom: -8,
    fontSize: 17,
    fontWeight: "bold",
    color: Color.yellow,
  }
})

export default styles