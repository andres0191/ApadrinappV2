import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import PrevScreenButton from '../../source/Components/PrevScreenButton';

const MenuApadrinapp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/que_Deseas.png')} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.HeaderText}>Categorias</Text>
      </View>
      <View style={styles.body}>
        <View>
          <Image source={require('../../assets/estado_cuenta.png')} style={styles.estadoCuenta} />
        </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
            <WhiteButton title='Atras' onPress={() => navigation.navigate('Login')}></WhiteButton>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
            <YellowButton title='holi' onPress={() => navigation.navigate('EstadoCuenta')}></YellowButton>
          </View>
      </View>
    </View>
    )
  }

export default MenuApadrinapp