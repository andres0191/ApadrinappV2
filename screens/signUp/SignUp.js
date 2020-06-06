import React, { useState } from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';

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
        <View>
            <TextInput
                placeholder='Name'
                style={styles.inputText}
                value = {name}
                onChange = {(e) => setName(e.nativeEvent.text)}
                />
            <TextInput
                placeholder='e-mail'
                style={styles.inputText}
                value = {user}
                onChange = {(e) => setUser(e.nativeEvent.text)}
                />
            <TextInput
                placeholder='Password'
                style={styles.inputText}
                value = {pass}
                onChange = {(e) => setPass(e.nativeEvent.text)}
                />
        </View>
      <TouchableHighlight style={[styles.button, styles.signUpnButton]} onPress={createNewUser}>
          <Text style={styles.textButton} >Create new user</Text>
      </TouchableHighlight>
    </View>
  );
}

export default SignUp