import React, { useState, useEffect } from 'react';
import {TextInput, Stylesheet, View, Text, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
import styles from './styles';

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

export default function App(){
    const [name, setName]=useState('');
    const [monto, setMonto]=useState('');
    const [description, setDescription]=useState('');

const save = async () => {
    try{
        const fire = firebase.firestore();
        await fire.collection('publications').add({
            name,
            monto,
            description
        });
    } catch (err) {
        console.log(err)
    }
    setName('');
    setMonto('');
    setDescription('');
}
return(
    <View style={styles.container}>
        <TextInput
            style={{ width: 400, height: 50, fontSize: 22, margin:  10}}
            placeholder='Name'
            onChangeText={name => setName(name)}
            value={name} />
            <TextInput
            style={{ width: 400, height: 50, fontSize: 22, margin:  10}}
            placeholder='Monto'
            onChangeText={monto => setMonto(monto)}
            value={monto} />
            <TextInput
            style={{ width: 400, height: 50, fontSize: 22, margin:  10}}
            placeholder='Description'
            onChangeText={description => setDescription(description)}
            value={description} />

            <TouchableHighlight style={styles.buttonForm}
                activeOpacity={0.6}
                underlayColor="red"
                onPress={() => save()}>
                    <Text style={styles.texto}>Guardar</Text>
                </TouchableHighlight>
                
            
    </View>
)
}

