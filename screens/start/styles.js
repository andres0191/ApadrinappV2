import React from 'react'
import Color from '../../source/utils/Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.purple,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        height: 200,
        width: 160,
      },
      MenuOptions: {
        flexDirection: 'row'
      },
      headerLeft: {
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingHorizontal: 10,
        paddingBottom: 12,
        backgroundColor: Color.lightpurple
      }
});

export default styles;