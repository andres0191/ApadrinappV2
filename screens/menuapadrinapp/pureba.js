import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './styles'
import firebaseService from '../../services/firebase';

const Prueba = () => {
    const [userName, setUserName] = useState('')
    useEffect(() => {
        (
            async () => {
                try {
                    const userData = await firebaseService.getUser()
                    setUserName(userData)
                } catch (e) {
                    alert(e)
                }
            }
        )()
    }, [])
   
    return (
        <View style={styles.container}>
            <Text>{`Holi ${userName}`}</Text>
        </View>
    );
}

export default Prueba