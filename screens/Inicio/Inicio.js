import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import YellowBigButton from '../../source/Components/YellowBigButton';
import WhiteBigButton from '../../source/Components/WhiteBigButton';


const Inicio = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/apadrinapp_logo.png')} style={styles.logo}/>
        <View style={styles.MenuOptions}>          
          <WhiteBigButton title="Rappi" onPress={() => navigation.navigate('login')}></WhiteBigButton>
          <YellowBigButton title="Inversor" onPress={() => navigation.navigate('Login')}></YellowBigButton>
        </View>
      </View>
    );
  }

export default Inicio



