import React, { useState, useEffect } from 'react';
import {TextInput, View, Text, YellowBox, Alert } from 'react-native';
import styles from './styles';
import YellowBigButton from '../../../source/Components/YellowBigButton';
import { useNavigation } from '@react-navigation/native';
import PrevScreenButton from '../../../source/Components/PrevScreenButton';
import NameLogin from '../../NameLogin/NameLogin';
import firebaseService from '../../../services/firebase'
import firebasePostService from '../../../services/firebaseForPost'
import MenuDreamer from '../../menuDreamer/MenuDreamer'

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

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
    const navigation = useNavigation();

  const LoadUserId = async () => {
    try {
      const RappiId = await firebaseService.getUserId()
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
            {/* <View style={styles.ElevatePic}>
                <Image source={require('../../../assets/Cabeceras/listaDreamers.png')} style={styles.logo}></Image>
            </View> */}
        </View>
        <View style={styles.body}>
            <Text style={styles.initialText}>Es el momento de que nos cuentes hacerca de ti y lo que deseas, te aseguramos que encontraras el GoodFather ideal para ti</Text>
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
            keyboardType={String}
            placeholderTextColor="white"
            style={styles.inputText}
            keyboardType = 'numeric'
            onChangeText={description => setDescription(description)}
            value={description} />
            <YellowBigButton
                activeOpacity={0.6}
                underlayColor="red"
                onPress={() => firebasePostService.savePublication(name, monto, description, rappiId)}>
            </YellowBigButton>
            
            <YellowBigButton title='Ver Publicaciones'
                onPress={() => { navigation.navigate('PublicacionesR'); }}>
            </YellowBigButton>
            {/* <YellowBigButton title='Ver mi publicación'
                onPress={() => return({yourCondition ? <yourComponent /> : null});}>
            </YellowBigButton> */}
        </View>
        <View style={styles.footer}>{/* 
            <Text>hola</Text> */}
        </View>
    {/* </ScrollView> */}
  </View>
)
}