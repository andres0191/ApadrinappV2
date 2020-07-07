import React, { useState, useEffect } from 'react';
import {TextInput, View, Text, TouchableHighlight } from 'react-native';
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
    const [lista, setLista] = useState([]);

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

const listar = async ()=> {
    let vector =[];
    try{
        const fire = firebase.firestore();
        const snapshot = await fire.collection('publications').get()
        snapshot.forEach((doc) => {
            let obj = {id:doc.id, name:doc.data().name, monto:doc.data().monto, description:doc.data().description};
            vector.push(obj)
        });
        setLista(vector);
    } catch (error) {
        console.log('error')
    }
}

useEffect(() => {
    listar();
},[])
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
            <View style={{textAlign: 'center'}}>
                <Text>Lista de Rappitenderos</Text>
                {lista.map(item => (
                    <View key={item.id} >
                    <Text>{item.name}</Text>
                    <Text>{item.monto}</Text>
                    <Text>{item.description}</Text>
                    <TouchableHighlight style={styles.buttonForm}
                    onPress={() => eliminar(item.id)}>
                        <Text>Delete</Text>
                        </TouchableHighlight>
                    </View>
                ))}
            </View>
    </View>
);
}

