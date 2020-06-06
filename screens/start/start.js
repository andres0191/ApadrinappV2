import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const Start = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/apadrinapp_logo.png')}
          style={styles.logo}/>
      <TouchableHighlight style={[styles.button, styles.next]} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textButton} >Next</Text>
      </TouchableHighlight>
      </View>
    );
  }

export default Start