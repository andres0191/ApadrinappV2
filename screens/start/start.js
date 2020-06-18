import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import YellowBigButton from '../../source/Components/YellowBigButton';
import WhiteBigButton from '../../source/Components/WhiteBigButton';
import PrevScreenButton from '../../source/Components/PrevScreenButton';


const Start = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View>
          <PrevScreenButton onPress={() => navigation.navigate('Inicio')}></PrevScreenButton>
        </View>
        <Image source={require('../../assets/apadrinapp_logo.png')} style={styles.logo}/>
        <View style={styles.MenuOptions}>
          <WhiteBigButton title="Ingresar" onPress={() => navigation.navigate('Login')}></WhiteBigButton>
          <YellowBigButton title="Regístrate" onPress={() => navigation.navigate('SignUp')}></YellowBigButton>
        </View>
      </View>
    );
  }

export default Start

