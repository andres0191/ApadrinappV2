import React, { useState } from 'react';
import { Text, View, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';
import firebaseService from '../../services/firebase';


const login = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const onPressLogin = async () => {
        try{
            await firebaseService.login(user, pass)
            navigation.navigate('MenuApadrinapp')
        } catch (e) {
            alert(e)
        }
    }

  return (
    <View style={styles.container}>
        <View>
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
      <TouchableHighlight style={[styles.button, styles.loginButton]} onPress={onPressLogin}>
          <Text style={styles.textButton} >Login</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.button, styles.signUpnButton]} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textButton} >Create new user</Text>
      </TouchableHighlight>
    </View>
  );
}
export default login