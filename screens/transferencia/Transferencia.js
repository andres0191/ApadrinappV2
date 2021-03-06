import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TextInput, ImageBackground, Alert } from 'react-native';
import styles from './styles';
import YellowButton from '../../source/Components/YellowButton';
import HollowInput from '../../source/Components/HollowInputSpace';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import NameLogin from '../NameLogin/NameLogin';
import firebaseService from '../../services/firebase'
import firebasePostService from '../../services/firebaseForPost'

const Transferencia = ({ route, navigation }) => {
  const { item } = route.params;
  const [monto, setMonto] = useState('')
  const [userId, setUserId] = useState('')
  const publicacionId = item.id
  const LoadUserId = async () => {
    try {
      const User = await firebaseService.getUserId()
      setUserId(User)        
    } catch (error) {
      Alert('No user')
    }
  }

  useEffect(() => {
    LoadUserId()
}, []);



const onPressTransaction = async (monto, userId, publicacionId) => {
  try {
     await firebasePostService.saveTransaction(monto, userId, publicacionId, item.name);
     if ((!parseInt(monto)) || (parseInt(monto) < 0)){
      Alert.alert('Debes ingresar un número mayor que 0. Intente nuevamente')
    
    } else {
      Alert.alert(
        'Gracias por aportar tu granito de arena'
      )
      await navigation.navigate('MenuApadrinapp', {userId: userId})

    }
  } catch (error){
    Alert('No se pudo realizar la transacción')
  }
}

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <PrevScreenButton onPress={() => navigation.navigate('MenuApadrinapp')}></PrevScreenButton>
            <Text style={styles.PageTitle}></Text>
            <NameLogin></NameLogin>
          </View>
          <View style={styles.ElevatePic}>
            <ImageBackground source={require('../../assets/Cabeceras/apadrinar.png')} style={styles.logo}>
            <View style={styles.IntrestBox}>
              <Text style={styles.YellowFont}>Interés</Text>
              <Text style={styles.BigText}>12%*</Text>
            </View>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.body}>
            <View style={styles.info}>
              <View style={styles.InputInfo}>
                <Text style={styles.YellowFont}>Cuanto vas a inveritr?</Text>
                <TextInput
                placeholder='$'
                placeholderTextColor='#472387'
                keyboardType='numeric'
                style={styles.inputText}
                value = {monto}
                onChange = {(e) => setMonto(e.nativeEvent.text)}/>
              </View>
              <View style={styles.InputInfo}>
                <Text style={styles.YellowFont}>Estás ayudando a:</Text>
                <HollowInput title={item.name}></HollowInput>
              </View>
            </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerRight]}>
            <YellowButton title='Apadrinar' onPress={() => onPressTransaction(monto, userId, publicacionId)}></YellowButton>
          </View>
        </View>
        </ScrollView>
    </View>
    )
  }
export default Transferencia


