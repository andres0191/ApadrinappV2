import React, { Component, useEffect, useState } from 'react';
import { Text, View, Image, TouchableHighlight, ScrollView, AsyncStorage } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import NameLogin from '../NameLogin/NameLogin';
import firebaseService from '../../services/firebase'


const MenuDreamer = ({ navigation }) => {
  const [userId, setUserId] = useState('')

  const LoadUserId = async () => {
    try {
      const UserId = await firebaseService.getUserId()
      setUserId(UserId)
    } catch (error) {
      alert('No user')
    }
  }
  useEffect(() => {
    LoadUserId()
}, []);

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <PrevScreenButton onPress={() => navigation.navigate('Login')}></PrevScreenButton>
            <Text style={styles.PageTitle}>Menu</Text>
            <NameLogin></NameLogin>
            <Text>{userId}</Text>
          </View>
          <View style={styles.ElevatePic}>
          <Image source={require('../../assets/Cabeceras/queDeseas.png')} style={styles.logo}></Image>
        </View>
        </View>
      <View style={styles.Categorias}>
        <Text style={styles.HeaderText}>Categorias</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.flexstyle}>
          <TouchableOpacity onPress={() => navigation.navigate('EstadoCuenta', {userId: userId})} >
            <Image source={require('../../assets/Menu/estadoDelDream.png')} style={styles.estadoCuenta} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('PostRappi')}>
            <Image source={require('../../assets/Menu/publicarDream.png')} style={styles.MoneyStyle} />
          </TouchableOpacity> 
        </View>
        </View>
      </ScrollView>
    </View>
    )
  }

export default MenuDreamer
