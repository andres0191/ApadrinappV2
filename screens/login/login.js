import React, { useState, useEffect } from 'react';
import { Text, View, TouchableHighlight, TextInput, Image, AsyncStorage } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';
import YellowBigButton from '../../source/Components/YellowBigButton';
import WhiteBigButton from '../../source/Components/WhiteBigButton';

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
            alert('Por favor ingres los datos correctos')
        }
    }

    const load = async () => {
        try {
            let user = await AsyncStorage.getItem(USEREMAIL)
            let pass = await AsyncStorage.getItem(PASSW)

            if (USEREMAIL !== null) {
                setUser(user);
            }
            if (PASSW !== null) {
                setPass(pass);
            }
        } catch (e) {
            alert(err);
        }
    };

    const remove = async () => {
        try {
            await AsyncStorage.removeItem(USEREMAIL);
            await AsyncStorage.removeItem(PASSW);
        } catch (err) {
            alert(err);
        }

        finally {
            setUser("");
            setPass("");
        }
    };

    useEffect(() => {
        load()
    }, []);


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
                onChange = {(e) => setUser(e.nativeEvent.text)}
                onChangeText={(text) => setUser(text)}/>
            <TextInput
                placeholder='Ingresa tu contraseña'
                placeholderTextColor="white"
                style={styles.inputText}
                value = {pass}
                onChange = {(e) => setPass(e.nativeEvent.text)}
                onChangeText={(text) => setPass(text)}/>
        </View>
        <View style={styles.MenuOptions}>
            <WhiteBigButton title='Ingresa' onPress={onPressLogin}></WhiteBigButton>
            <WhiteBigButton title='borrar' onPress={() => remove()}></WhiteBigButton>
            <YellowBigButton title='Registrate' onPress={() => navigation.navigate('SignUp')}></YellowBigButton>
        </View>
    </View>
  );
}
export default login