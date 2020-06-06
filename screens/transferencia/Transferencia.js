import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import PurpleButton from '../../source/Components/PurpleButton';
import firebaseService from '../../services/firebase';


const Transferencia = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
        </View>
        <View style={styles.headerRight}>
        </View>
      </View>
      <View style={styles.body}>
        <Image source={require('../../assets/apadrina-03.svg')}
              style={styles.logo}></Image>
        <View style={styles.sidecolumn}>
          <Text>Izquierda</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textColor}>Monto a Prestar: </Text>
          <PurpleButton title='Apadrinar' onPress={() => navigation.navigate('EstadoCuenta')}></PurpleButton>
          <PurpleButton title='Apadrinar' onPress={() => navigation.navigate('EstadoCuenta')}></PurpleButton>
        </View>
        <View style={styles.sidecolumn}>
          <Text>Derecha</Text>
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