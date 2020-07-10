import React, { useState } from 'react';
import { View, Image, TextInput } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';
import YellowBigButton from '../../source/Components/YellowBigButton';

const SignUp = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const createNewUser = async () => {
        try{
            await firebaseService.createUser(name, user, pass);
            navigation.navigate('Dreamer')
          } catch (e) {
            alert('Recuerda que la contraseña debe tener minimo 8 caracteres y debes ingresar un correo valido. Por favor intentalo de nuevo')
        }
    }

    const onPressLogin = async () => {
        try{
            await firebaseService.login(user, pass)
            navigation.navigate('Main')
        } catch (e) {
            alert('Recuerda que la contraseña debe tener minimo 8 caracteres y debes ingresar un correo valido. Por favor intentalo de nuevo')
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.logo}>
       <Image source={require('../../assets/Cabeceras/registro.png')} style={styles.IconImage} />
        </View>
        <View>
            <TextInput
                placeholder='Nombre'
                placeholderTextColor="white"
                style={styles.inputText}
                value = {name}
                onChange = {(e) => setName(e.nativeEvent.text)}
                />
            <TextInput
                placeholder='e-mail'
                placeholderTextColor="white"
                style={styles.inputText}
                value = {user}
                onChange = {(e) => setUser(e.nativeEvent.text)}
                />
            <TextInput
                placeholder='contraseña'
                secureTextEntry
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