import React, { useState, useEffect } from 'react';
import {TextInput, Stylesheet, View, Text, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
import styles from './styles';
import YellowBigButton from '../../../source/Components/YellowBigButton';
import { useNavigation } from '@react-navigation/native';
import PrevScreenButton from '../../../source/Components/PrevScreenButton';


const firebaseConfig = {
        apiKey: "AIzaSyAh8XV0mSjGA27eZUNcJgHNrWFFsUg2qG8",
        authDomain: "apadrinapp-450d3.firebaseapp.com",
        databaseURL: "https://apadrinapp-450d3.firebaseio.com",
        projectId: "apadrinapp-450d3",
        storageBucket: "apadrinapp-450d3.appspot.com",
        messagingSenderId: "529527861357",
        appId: "1:529527861357:web:6e3b80b1790c6e384acf64",
        measurementId: "G-HD1SSPMEXJ"
}
class Firebase{
    constructor(){
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
    }
}

export default function PostPublication(){
    const [name, setName]=useState('');
    const [monto, setMonto]=useState('');
    const [description, setDescription]=useState(['']);
    const navigation = useNavigation();

const save = async () => {
    try{
        const fire = firebase.firestore();
        await fire.collection('publications').add({
            name,
            monto,
            description
        });
    } catch (error) {
        console.log('error');
        throw error;
    }
    setName('');
    setMonto('');
    setDescription('');
}
return(
    <View style={styles.container}>
        <PrevScreenButton stye={styles.prevButton} onPress={() => navigation.navigate('login')}></PrevScreenButton>
        <Text style={styles.textheader}>Es el momento de que nos cuentes acerca de ti y lo que deseas, te aseguramos que encontraras el GoodFather ideal para ti</Text>
        <TextInput
            placeholder='Ingresa tu Nombre'
            placeholderTextColor="white"
            style={styles.inputText}
            onChangeText={name => setName(name)}
            value={name} />
            <TextInput
            placeholder='Cuanto necesitas?'
            placeholderTextColor="white"
            style={styles.inputText}
            onChangeText={monto => setMonto(monto)}
            value={monto} />
            <TextInput
            placeholder='Cuentanos para que deseas el $'
            placeholderTextColor="white"
            style={styles.inputText}
            onChangeText={description => setDescription(description)}
            value={description} />
            <View style={styles.options}>
                <YellowBigButton
                title='Publicar'
                    activeOpacity={0.6}
                    underlayColor="red"
                    onPress={() => save()}>
                </YellowBigButton>
                <YellowBigButton title='Ver' onPress={() => { navigation.navigate('PublicacionesR'); }}></YellowBigButton>
            </View>      
 </View> 
)
}
 