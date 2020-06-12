import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, ScrollView, AsyncStorage } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import Prueba from './pureba';

const UserEmail = async ()  => {
  await AsyncStorage.getItem(USEREMAIL);
}
const MenuApadrinapp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <PrevScreenButton onPress={() => navigation.navigate('Ciclo')}></PrevScreenButton>
            <Text style={styles.PageTitle}>Menu</Text>       
            <Prueba></Prueba>
          </View>
        </View>
      <View>
        <Image source={require('../../assets/que_Deseas.png')} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.HeaderText}>Categorias</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.flexstyle}>
          <TouchableOpacity onPress={() => navigation.navigate('EstadoCuenta')} >
            <Image source={require('../../assets/estado_cuenta.png')} style={styles.estadoCuenta} />
          </TouchableOpacity>
          <TouchableOpacity /* onPress={() => navigation.navigate('Login')} */  >
            <Image source={require('../../assets/microprestamos.png')} style={styles.MoneyStyle} />
          </TouchableOpacity> 
        </View>
        <View style={styles.flexstyle}>
          <TouchableOpacity onPress={() => navigation.navigate('PublicacionesRappi')}>
            <Image source={require('../../assets/apadrina_serv.png')} style={styles.ApadrinaStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Transferencia')}>
            <Image source={require('../../assets/confia_serv.png')} style={styles.ConfiaStyle} />
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
            <WhiteButton title='Salir' onPress={() => navigation.navigate('Start')}></WhiteButton>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
            <YellowButton title='Saldo' onPress={() => navigation.navigate('EstadoCuenta')}></YellowButton>
          </View>
      </View>
      </ScrollView>
    </View>
    )
  }

export default MenuApadrinapp
