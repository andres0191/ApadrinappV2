import React, { useState, useEffect } from 'react';
import {  View, TextInput, Image, AsyncStorage } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';
import YellowBigButton from '../../source/Components/YellowBigButton';
import WhiteBigButton from '../../source/Components/WhiteBigButton';
import PurpleBigButton from '../../source/Components/PurpleBigButton'
import { TouchableWithoutFeedback } from 'react-native';
import Color from '../../source/utils/Colors';

let USEREMAIL = 'sinUser'
let PASSW = "NoPass"
const login = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [hidePass, setHidePass] = useState(true)

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
            <View style={styles.PassIn}>
                <TextInput
                    placeholder='Ingresa tu contraseña'
                    secureTextEntry={hidePass}
                    placeholderTextColor="white"
                    value = {pass}
                    style={styles.PassText}
                    onChange = {(e) => setPass(e.nativeEvent.text)}
                    onChangeText={(text) => setPass(text)}>
                </TextInput>
                <TouchableWithoutFeedback onPress={() => setHidePass(!hidePass)}>
                    <Image source={require('../../assets/Botones/Eye.png')} style={styles.Eye} />
                </TouchableWithoutFeedback>
            </View>
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