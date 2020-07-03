import React, { useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from './styles';
import firebaseService from '../../../services/firebase';
import YellowBigButton from '../../../source/Components/YellowBigButton';
import PrevScreenButton from '../../../source/Components/PrevScreenButton';

const SignUpRappi = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const createNewUser = async () => {
        try{
            await firebaseService.createUser(name, user, pass);
            navigation.navigate('MenuDreamer')
          } catch (e) {
                alert('Por favor ingresa los datos correctos')
        }
    }

    const onPressLogin = async () => {
        try{
            await firebaseService.login(user, pass)
            navigation.navigate('Main')
        } catch (e) {
            alert('Por favor ingresa los datos correctos')
        }
    }


  return (
    <View style={styles.container}>
        <View style={styles.logo}>
        <View>
            <PrevScreenButton onPress={() => navigation.navigate('login')}></PrevScreenButton>
        </View>
       <Image source={require('../../../assets/Cabeceras/registro.png')} style={styles.IconImage} />
        </View>
        <View>
            <TextInput
                placeholder='Nombre'
                placeholderTextColor="white"
                keyboardType= 'String'
                style={styles.inputText}
                value = {name}
                onChange = {(e) => setName(e.nativeEvent.text)}
                />
            <TextInput
                placeholder='e-mail'
                placeholderTextColor="white"
                keyboardType= "email-address"
                style={styles.inputText}
                value = {user}
                onChange = {(e) => setUser(e.nativeEvent.text)}
                />
            <TextInput
                placeholder='contraseña'
                placeholderTextColor="white"
                secureTextEntry
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

export default SignUpRappi