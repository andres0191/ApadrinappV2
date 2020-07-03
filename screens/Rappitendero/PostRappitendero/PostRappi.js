import React, { useState, useEffect } from 'react';
import {TextInput, View, Text, Alert, Image } from 'react-native';
import styles from './styles';
import YellowBigButton from '../../../source/Components/YellowBigButton';
import WhiteBigButton from '../../../source/Components/WhiteBigButton';
import { useNavigation } from '@react-navigation/native';
import PrevScreenButton from '../../../source/Components/PrevScreenButton';
import NameLogin from '../../NameLogin/NameLogin';
import firebaseService from '../../../services/firebase'
import firebasePostService from '../../../services/firebaseForPost'
/* import SinglePost from './SingleRappiPost'; */
import MenuDreamer from '../menuDreamer/MenuDreamer';


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
      Alert('No user')
    }
  }
  useEffect(() => {
    LoadUserId()
}, []);

return(
    <View style={styles.container}>
        {/* <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}> */}
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <PrevScreenButton onPress={() => navigation.navigate('MenuDreamer')}></PrevScreenButton>
                <Text style={styles.PageTitle}>Dreamers Rappis</Text>
                <NameLogin></NameLogin>
            </View>
            <View style={styles.ElevatePic}>
                <Image source={require('../../../assets/Cabeceras/Dreams.png')} style={styles.logo}></Image>
            </View>
        </View>
        <View style={styles.body}>
        <Text style={styles.initialText}>Hola {Dreamer}, recuerda que:            "Cualquier cosa que la mente del hombre puede concebir y creer, puede ser conseguida." Napoleon Hill. </Text>
            <View style={styles.textW}>
            {/* <TextInput
            placeholder='Nombre'
            keyboardType="String"
            placeholderTextColor="white"
            style={styles.inputText}
            onChangeText={name => setName(name)}
            value={name} /> */}
            <TextInput
            placeholder='¿Cuánto necesitas?'
            keyboardType="number"
            placeholderTextColor="white"
            style={styles.inputText}
            onChangeText={monto => setMonto(monto)}
            value={monto} />
            <TextInput
            placeholder='¿Cual es tu sueño?'
            placeholderTextColor="white"
            style={styles.inputText}
            keyboardType = "string"
            onChangeText={description => setDescription(description)}
            value={description} />
            </View>
            <View style={styles.buttons}>
            <YellowBigButton title="Dream"
                activeOpacity={0.6}
                underlayColor="red"
                onPress={() => firebasePostService.savePublication(name, monto, description, rappiId)}>
            </YellowBigButton>
            </View>
        </View>
        <View style={styles.footer}>{/* 
            <Text>hola</Text> */}
        </View>
    {/* </ScrollView> */}
  </View>
)
}