import React from 'react';
import { Text, View, Image,  } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        <View style={styles.flexstyle}>
          <TouchableOpacity onPress={() => navigation.navigate('EstadoCuenta')} >
            <Image source={require('../../assets/estado_cuenta.png')} style={styles.estadoCuenta} />
          </TouchableOpacity>
          {/* <TouchableOpacity /* onPress={() => navigation.navigate('Login')}  >
            <Image source={require('../../assets/microprestamos.png')} style={styles.MoneyStyle} />
          </TouchableOpacity> */}
        </View>
        <View style={styles.flexstyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Lista')}>
            <Image source={require('../../assets/apadrina_serv.png')} style={styles.ApadrinaStyle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/confia_serv.png')} style={styles.ConfiaStyle} />
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
            <WhiteButton title='Atras' onPress={() => navigation.navigate('Login')}></WhiteButton>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
            <YellowButton title='Saldo' onPress={() => navigation.navigate('EstadoCuenta')}></YellowButton>
          </View>
      </View>
    </View>
    )
  }

export default MenuApadrinapp
