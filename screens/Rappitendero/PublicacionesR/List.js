import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
import styles from './styles';
import YellowButton from '../../../source/Components/YellowButton';
import { useNavigation } from '@react-navigation/native';

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
        console.disableYellowBox = true;
    }
}

const List = () => {
const [lista, setLista] = useState([]);
const navigation = useNavigation();

const listar = async () => {
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

/* var NAMENAME = ''
var IDID = ''

function storeNameId(name, id){
    NAMENAME = name;
    IDID = id;
} */

return(
    <View style={styles.container}>
            <View style={styles.AllBoxes}>
                {lista.map(item => (
                     <View key={item.id} style={styles.Boxes}>
                    <Text style={styles.Dreamer}>Dreamer</Text>
                    <Text style={styles.ItemName}>{item.name}</Text>
                    <Text style={styles.ItemMonto}>Cantidad solicitada: $ {item.monto}</Text>
                    <Text style={styles.ItemDescription}>{item.description}</Text>
                    <Text></Text>
                    {/* <YellowButton title='Apadrinar' onPress={() => { storeNameId(this.item.name, this.item.id);  navigation.navigate('Transferencia');}}></YellowButton> */}
                    </View>
                ))}
            </View>
    </View>
);
}

export default List
