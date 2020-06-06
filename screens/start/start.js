import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';

const Start = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/apadrinapp_logo.png')} style={styles.logo}
        />
        <WhiteButton title="Log in" onPress={() => navigation.navigate('Login')}></WhiteButton>
        <WhiteButton title="Sign in" onPress={() => navigation.navigate('SignUp')}></WhiteButton>
        <WhiteButton title='holaa' onPress={() => navigation.navigate('Transferencia')}></WhiteButton>
      </View>
    );
  }

export default Start