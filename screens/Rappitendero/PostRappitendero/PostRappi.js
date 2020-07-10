import React, { useState, useEffect } from 'react';
import {TextInput, View, Text, Alert, Image, ScrollView } from 'react-native';
import styles from './styles';
import YellowBigButton from '../../../source/Components/YellowBigButton';
import PurpleBigButton from '../../../source/Components/PurpleBigButton';
import { useNavigation } from '@react-navigation/native';
import PrevScreenButton from '../../../source/Components/PrevScreenButton';
import NameLogin from '../../NameLogin/NameLogin';
import firebaseService from '../../../services/firebase'
import firebasePostService from '../../../services/firebaseForPost'

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
    const [rappiId, setRappiId] = useState('');
    const [Dreamer, setDreamer] = useState('');
    const [singlePost, setSinglePost] = useState([]);
    const navigation = useNavigation();

    const LoadUserId = async () => {
    try {
      const RappiId = await firebaseService.getUserId();
      const Dreamer  = await firebaseService.getUserName();
      setDreamer(Dreamer)
      setRappiId(RappiId)
    } catch (error) {
      Alert('No hay usuario')
    }
  }
  useEffect(() => {
    LoadUserId()
}, []);



const DoubleFunctionOk = async () => {
    try{
        if ((monto != '') && (description != '')){
        Alert.alert(
            `${Dreamer}`,
            "La publicación ha sido exitosa!",
            [
                await firebasePostService.savePublication(Dreamer, monto, description, rappiId),
              { text: "OK", onPress: () =>  navigation.navigate('MenuDreamer')}
            ],
          );
        }
        else {
            Alert.alert('Favor ingresar datos correctos')
        }
    }catch (error) {
        Alert.alert('Falló')
    }
}

return(
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <PrevScreenButton style={styles.back} onPress={() => navigation.navigate('MenuDreamer')}></PrevScreenButton>
                <Text style={styles.PageTitle}>Dreamers</Text>
                <NameLogin></NameLogin>
            </View>
            <View style={styles.ElevatePic}>
                <Image source={require('../../../assets/Cabeceras/Dreams.png')} style={styles.logo}></Image>
            </View>
        </View>
        <View style={styles.body}>
        <Text style={styles.initialText}>Hola {Dreamer}, este es un lugar{"\n"}para compartir tus sueños {"\n"}y hasta donde quieres llegar </Text>
            <View style={styles.textW}>
            <TextInput
            placeholder='¿Cuánto necesitas?'
            keyboardType="numeric"
            placeholderTextColor="white"
            style={styles.inputText}
            onChangeText={monto => setMonto(monto)}
            value={monto} />
            <TextInput
            placeholder='¿Cuál es tu sueño?'
            placeholderTextColor="white"
            multiline
            style={styles.inputTextDream}
            keyboardType = "string"
            onChangeText={description => setDescription(description)}
            value={description} />
            </View>
            <View style={styles.buttons}>
            <YellowBigButton title="Dream"
                activeOpacity={0.6}
                underlayColor="red"
                onPress={() => {DoubleFunctionOk()}}>
            </YellowBigButton>
            </View>
        </View>
        <View style={styles.footer}>
            <PurpleBigButton title='Cancelar' onPress={() => navigation.navigate('MenuDreamer')}></PurpleBigButton>
        </View>
        </ScrollView>
  </View>
)
}
