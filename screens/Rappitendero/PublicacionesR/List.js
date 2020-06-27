import React, { useState, useEffect } from 'react';
import { View, Text, YellowBox, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';

/* YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
}; */
const List = () => {
const [lista, setLista] = useState([]);
const [isLoading, setLoading] = useState(true);
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
        await setLista(vector);
        setLoading(false);
    } catch (error) {
        console.log('error')
    }
}

useEffect(() => {
    listar();
},[])

return(
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
            <View style={styles.AllBoxes}>
                {lista.map(item => (
                     <View key={item.id} style={styles.Boxes}>
                    <Text style={styles.Dreamer}>Dreamer</Text>
                    <Text style={styles.ItemName}>{item.name}</Text>
                    <Text style={styles.ItemMonto}>Cantidad solicitada: $ {item.monto}</Text>
                    <Text style={styles.ItemDescription}>{item.description}</Text>
                    <Text style={styles.ItemDescription}>{item.id}</Text>
                    <Text></Text>
                </View>
                ))}
            </View>
            )}
        </View>
);
}

export default List