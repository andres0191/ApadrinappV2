import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import styles from './styles';
import YellowBigButton from '../../source/Components/YellowBigButton';
import WhiteBigButton from '../../source/Components/WhiteBigButton';


const Start = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/apadrinapp_logo.png')} style={styles.logo}/>
        <View style={styles.MenuOptions}>          
          <WhiteBigButton title="Ingresar" onPress={() => navigation.navigate('Login')}></WhiteBigButton>
          <YellowBigButton title="Registrate" onPress={() => navigation.navigate('SignUp')}></YellowBigButton>
        </View>
      </View>
    );
  }

export default Start

