import React, { Component, useEffect, useState } from 'react';
import { Text, View, Image, TouchableHighlight, ScrollView, AsyncStorage } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import NameLogin from '../NameLogin/NameLogin';
import firebaseService from '../../services/firebase'


const MenuApadrinapp = ({ navigation }) => {
  const [userId, setUserId] = useState('')

  const LoadUserId = async () => {
    try {
      const UserId = await firebaseService.getUserId()
      setUserId(UserId)
    } catch (error) {
      alert('No hay usuario')
    }
  }
  useEffect(() => { LoadUserId() }, []);

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            {/* <PrevScreenButton onPress={() => navigation.navigate('Login')}></PrevScreenButton> */}
            <Text style={styles.PageTitle}>Menú</Text>
            <NameLogin></NameLogin>
          </View>
          <View style={styles.ElevatePic}>
          <Image source={require('../../assets/Cabeceras/queDeseas.png')} style={styles.logo}></Image>
        </View>
        </View>
      <View style={styles.Categorias}>
        <Text style={styles.HeaderText}>Categorías</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.flexstyle}>
          <TouchableOpacity onPress={() => navigation.navigate('PublicacionesRappi')}>
            <View  style={styles.ApadrinaStyle}>
            <Image style={styles.imageMenu} source={require('../../assets/Menu/menuapadrina.png')}/>
            </View>
            </TouchableOpacity> 
          <TouchableOpacity onPress={() => navigation.navigate('EstadoCuenta', {userId: userId})} >
            <View style={styles.estadoCuenta}>
            <Image style={styles.imageMenu} source={require('../../assets/Menu/estadoDeCuenta.png')} />
            </View>
          </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('UserTransacciones')}>
            <View style={styles.MoneyStyle}>
            <Image style={styles.imageMenu} source={require('../../assets/Menu/menuestado.png')} />
            </View>
            </TouchableOpacity>
          {/* <TouchableOpacity>
            <Image source={require('../../assets/Menu/confiar.png')} style={styles.ConfiaStyle} />
          </TouchableOpacity> */}
        </View>
        </View>
      </ScrollView>
    </View>
    )
  }

export default MenuApadrinapp