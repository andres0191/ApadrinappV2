import React, { useState, useEffect } from 'react';
import {  View, TextInput, Image, AsyncStorage } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';
import YellowBigButton from '../../source/Components/YellowBigButton';
import WhiteBigButton from '../../source/Components/WhiteBigButton';
import PurpleBigButton from '../../source/Components/PurpleBigButton'

let USEREMAIL = 'sinUser'
let PASSW = "NoPass"
const login = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const onPressLogin = async () => {
        try{
            await firebaseService.login(user, pass)
            await AsyncStorage.setItem(USEREMAIL, user);
            await AsyncStorage.setItem(PASSW, pass);
            navigation.navigate('MenuApadrinapp')
        } catch (e) {
            alert('Recuerde que la contraseña debe tener un mínimo de 8 caracteres y debe ingresar un correo electrónico válido. Inténtalo de nuevo')
        }
    }
    const load = async () => {
        try {
            let user = await AsyncStorage.getItem(USEREMAIL)
            let pass = await AsyncStorage.getItem(PASSW)

            if (USEREMAIL !== null) {
                setUser(user);
            } if (PASSW !== null) {
                setPass(pass);
            }} catch (e) {
            alert('Error al cargar los datos');
        }}; useEffect(() => { load() }, []);

  return (
    <View style={styles.container}>
        <View>
            <Image source={require('../../assets/apadrinapp_logo.png')} style={styles.logo}></Image>
        </View>
        <View>
            <TextInput
                placeholder='Ingresa tu e-mail' 
                placeholderTextColor="white"
                style={styles.inputText}
                value = {user}
                onChange = {(e) => setUser(e.nativeEvent.text)}
                onChangeText={(text) => setUser(text)}/>
            <TextInput
                placeholder='Ingresa tu contraseña'
                secureTextEntry
                placeholderTextColor="white"
                style={styles.inputText}
                value = {pass}
                onChange = {(e) => setPass(e.nativeEvent.text)}
                onChangeText={(text) => setPass(text)}/>
        </View>
        <View style={styles.MenuOptions}>
            <WhiteBigButton title='Ingresa' onPress={onPressLogin}></WhiteBigButton>
            <YellowBigButton title='Regístrate' onPress={() => navigation.navigate('SignUp')}></YellowBigButton>
            <PurpleBigButton title='Cancelar' onPress={() => navigation.navigate('Inicio')}></PurpleBigButton>

        </View>
    </View>
  );
}
export default login