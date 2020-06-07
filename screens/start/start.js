import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';

const Start = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/apadrinapp_logo.png')} style={styles.logo}
        />
        <View style={styles.MenuOptions}>
          <WhiteButton title="Log in" onPress={() => navigation.navigate('Login')}></WhiteButton>
          <WhiteButton title="Sign in" onPress={() => navigation.navigate('SignUp')}></WhiteButton>
        </View>
      </View>
    );
  }

export default Start