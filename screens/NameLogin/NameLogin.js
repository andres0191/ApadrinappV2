import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from '../menuapadrinapp/styles'
import firebaseService from '../../services/firebase';

const NameLogin = () => {
    const [userName, setUserName] = useState('')
    useEffect(() => {
        (
            async () => {
                try {
                    const userData = await firebaseService.getUserName()
                    setUserName(userData)
                } catch (e) {
                    alert(e)
                }
            }
        )()
    }, [])
   
    return (
        <View >
            <Text style={styles.PageTitle}>{`${userName}`}</Text>
        </View>
    );
}

export default NameLogin
