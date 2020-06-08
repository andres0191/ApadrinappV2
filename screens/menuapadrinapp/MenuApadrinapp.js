import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import firebaseService from '../../services/firebase';
import HollowInput from '../../source/Components/HollowInputSpace';
import PrevScreenButton from '../../source/Components/PrevScreenButton';

const MenuApadrinapp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <PrevScreenButton onPress={() => navigation.navigate('Start')}></PrevScreenButton>
        </View>
        <View style={styles.headerMiddle}>
          <Text style={styles.PageTitle}>Menu</Text>
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
            <WhiteButton title='Atras' onPress={() => navigation.navigate('Login')}></WhiteButton>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
            <YellowButton title='Apadrinar' onPress={() => navigation.navigate('EstadoCuenta')}></YellowButton>
          </View>
      </View>
    </View>
    )
  }
  
export default MenuApadrinapp