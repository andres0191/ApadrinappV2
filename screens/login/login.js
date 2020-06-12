import React, { useState } from 'react';
import { Text, View, TouchableHighlight, TextInput, Image, AsyncStorage } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';
import YellowBigButton from '../../source/Components/YellowBigButton';
import WhiteBigButton from '../../source/Components/WhiteBigButton';

let USEREMAIL = 'sinUser';
const login = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const onPressLogin = async () => {
        try{
            await firebaseService.login(user, pass)
            await AsyncStorage.setItem(USEREMAIL, user);
            navigation.navigate('MenuApadrinapp')
        } catch (e) {
            alert('Por favor ingres los datos correctos')
            
        }
    }

  return (
    <View style={styles.container}>
        <View>
            <Image source={require('../../assets/apadrinapp_logo.png')} style={styles.loginlogo}></Image>
        </View>
        <View>
            <TextInput
                placeholder='Ingresa tu correo' 
                placeholderTextColor="white"
                style={styles.inputText}
                value = {user}
                onChange = {(e) => setUser(e.nativeEvent.text)}/>
            <TextInput
                placeholder='Ingresa tu contrasena'
                placeholderTextColor="white"
                style={styles.inputText}
                value = {pass}
                onChange = {(e) => setPass(e.nativeEvent.text)}/>
        </View>
        <View style={styles.MenuOptions}>
            <WhiteBigButton title='Ingresa' onPress={onPressLogin}></WhiteBigButton>
            <YellowBigButton title='Registrate' onPress={() => navigation.navigate('SignUp')}></YellowBigButton>   
        </View>
    </View>
  );
}
export default login