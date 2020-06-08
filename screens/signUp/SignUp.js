import React, { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';
import YellowBigButton from '../../source/Components/YellowBigButton';

const SignUp = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const createNewUser = async () => {
        try{
            await firebaseService.createUser(name, user, pass)
            navigation.navigate('Main')
          } catch (e) {
            alert(e)
        }
    }

    const onPressLogin = async () => {
        try{
            await firebaseService.login(user, pass)
            navigation.navigate('Main')
        } catch (e) {
            alert(e)
        }
    }


  return (
    <View style={styles.container}>
        <View style={styles.logo}>
        <Image source={require('../../assets/apadrinapp_logo.png')} style={styles.loginlogo}></Image>
        </View>
        <View>
            <TextInput
                placeholder='Ingresa tu Nombre'
                placeholderTextColor="white"
                style={styles.inputText}
                value = {name}
                onChange = {(e) => setName(e.nativeEvent.text)}
                />
            <TextInput
                placeholder='Cual estu e-mail?'
                placeholderTextColor="white"
                style={styles.inputText}
                value = {user}
                onChange = {(e) => setUser(e.nativeEvent.text)}
                />
            <TextInput
                placeholder='Ingresa tu contrasena'
                placeholderTextColor="white"
                style={styles.inputText}
                value = {pass}
                onChange = {(e) => setPass(e.nativeEvent.text)}
                />
        </View>
        <View style={styles.MenuOptions}>
            <YellowBigButton title='Registrarme' onPress={createNewUser}></YellowBigButton>
        </View>
    </View>
  );
}

export default SignUp