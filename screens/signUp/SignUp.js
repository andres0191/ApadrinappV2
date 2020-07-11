import React, { useState } from 'react';
import { View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';
import YellowBigButton from '../../source/Components/YellowBigButton';

const SignUp = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const [hidePass, setHidePass] = useState(true)

    const createNewUser = async () => {
        try{
            await firebaseService.createUser(name, user, pass);
            navigation.navigate('Dreamer')
          } catch (e) {
            alert('Recuerde que la contraseña debe tener un mínimo de 8 caracteres y debe ingresar un correo electrónico válido. Inténtalo de nuevo')
        }
    }

    const onPressLogin = async () => {
        try{
            await firebaseService.login(user, pass)
            navigation.navigate('Main')
        } catch (e) {
            alert('Recuerde que la contraseña debe tener un mínimo de 8 caracteres y debe ingresar un correo electrónico válido. Inténtalo de nuevo')
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.logo}>
       <Image source={require('../../assets/apadrinapp_logo_h.png')} style={styles.IconImage} />
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
            <View style={styles.PassIn}>
                <TextInput
                    placeholder='contraseña'
                    secureTextEntry={hidePass}
                    placeholderTextColor="white"
                    style={styles.PassText}
                    value = {pass}
                    onChange = {(e) => setPass(e.nativeEvent.text)}
                    />
                <TouchableWithoutFeedback onPress={() => setHidePass(!hidePass)}>
                    <Image source={require('../../assets/Botones/Eye.png')} style={styles.Eye} />
                </TouchableWithoutFeedback>
            </View>
        </View>
        <View style={styles.MenuOptions}>
            <YellowBigButton title='Registrarme' onPress={createNewUser}></YellowBigButton>
        </View>
    </View>
  );
}

export default SignUp