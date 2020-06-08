import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import firebaseService from '../../services/firebase';
import HollowInput from '../../source/Components/HollowInputSpace';
import PrevScreenButton from '../../source/Components/PrevScreenButton';

const EstadoCuenta = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <PrevScreenButton onPress={() => navigation.navigate('Menu')}></PrevScreenButton>
        </View>
        <View style={styles.headerMiddle}>
          <Text style={styles.PageTitle}>Tu inversion actual</Text>
        </View>
        <View style={styles.headerRight}></View>
      </View>
      <View style={styles.body}>
        <View style={styles.ElevatePic}>
          <Image source={require('../../assets/apadrina-03.svg')} style={styles.logo}></Image>
        </View>
            <View style={styles.info}>
              <View style={styles.InputInfo}>
                <Text style={styles.YellowFont}>Monto a invertir: </Text>
                <HollowInput title='Ingresa Monto' ></HollowInput>
              </View>
              <View style={styles.InputInfo}>
                <Text style={styles.YellowFont}>Apadrinarás a:</Text>
                <HollowInput title= "Ingresa Monto"></HollowInput>
              </View>
            </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
            <WhiteButton title='Menu' onPress={() => navigation.navigate('MenuApadrinapp')}></WhiteButton>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
            <YellowButton title='Apadrinar' onPress={() => navigation.navigate('Transferencia')}></YellowButton>
          </View>
      </View>
    </View>
    )
  }

export default EstadoCuenta