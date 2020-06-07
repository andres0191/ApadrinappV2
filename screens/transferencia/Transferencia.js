import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import PurpleButton from '../../source/Components/PurpleButton';
import firebaseService from '../../services/firebase';
import HollowInput from '../../source/Components/HollowInputSpace';


const Transferencia = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}></View>
        <View style={styles.headerRight}></View>
      </View>
      <View style={styles.body}>
        <Image source={require('../../assets/apadrina-03.svg')} style={styles.logo}></Image>
            <View style={styles.info}>
              <View style={styles.InputInfo}
              <Text style={styles.textColor}>Monto a Prestar: </Text>
              <HollowInput title='Apadrinar' onPress={() => navigation.navigate('EstadoCuenta')}></HollowInput>
              <PurpleButton title='Apadrinar' onPress={() => navigation.navigate('EstadoCuenta')}></PurpleButton>
              <PurpleButton title='Apadrinar' onPress={() => navigation.navigate('EstadoCuenta')}></PurpleButton>
            </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
            <WhiteButton title='Atras' onPress={() => navigation.navigate('PublicacionesRappi')}></WhiteButton>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
            <PurpleButton title='Apadrinar' onPress={() => navigation.navigate('EstadoCuenta')}></PurpleButton>
          </View>
      </View>
    </View>
    )
  }

export default Transferencia