import React, { useState, useEffect } from 'react';
import { View, Text, YellowBox, Alert, ImagePickerIOS } from 'react-native';
import * as firebase from 'firebase';
import firebaseService from '../../../services/firebase'
import 'firebase/firebase-firestore';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import PrevScreenButton from '../../../source/Components/PrevScreenButton';
import _ from 'lodash';
import firebaseGetService from '../../../services/firebaseForGet';
import firebaseDeleteService from '../../../services/firebaseForDelete';
import YellowButton from '../../../source/Components/YellowButton';


const SinglePost = () => {
const [singlePost, setPost] = useState([]);
const [rappiId, setRappiId] = useState("");
let [publicationId, setPublicationId] = useState([]);

const navigation = useNavigation();

const LoadUserId = async () => {
    try {
        const RappiId = await firebaseService.getUserId();
        const onlyPost = await firebaseGetService.getOnePublication(RappiId)
        const onePost = await firebaseGetService.getSinglePublication(RappiId)
        let itemId = 
onePost.id
;
        setPublicationId(itemId);
        setPost(onlyPost);
        setRappiId(RappiId);
    } catch (error) {
      Alert.alert('No user')
    }
  }

useEffect(() => {
    LoadUserId();
}, []);

const OnPressDelete = async (publicationId) => {
    try {
        await firebaseDeleteService.deletePublication(publicationId);
        Alert.alert('La publicacion se ha eliminado correctamente')
        /* await navigation.navigate('PostRappi'); */
    } catch (error) {
        Alert.alert('No se logro eliminar la publicación')
    }
};


/* const openTwoButtonAlert=(publicationId) => {
  console.log('hola si');
    Alert.alert(
      'Borrar publicación',
      'Estas seguro?',
      [
        {text: 'Sí', onPress: () =>  OnPressDelete(publicationId)},
        {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
      ],
      {
        cancelable: true
      }
    );
    }; */


return(
    <View style={styles.container}>
        <PrevScreenButton onPress={() => navigation.navigate('PostRappi')}></PrevScreenButton>
            <View style={styles.AllBoxes}>
                {singlePost.map(item  => (
                     <View key={item.id} style={{ backgroundColor: 'red' }}>
                        <Text style={styles.ItemName}>{item.name}</Text>
                        <Text style={styles.ItemMonto}>{item.monto}</Text>
                        <Text style={styles.ItemDescription}>{item.description}</Text>
                        <Text style={styles.ItemDescription}>{item.id}</Text>
                    </View>
                ))}
            </View>
            <YellowButton title='Eliminar Publicación' onPress={() => OnPressDelete(publicationId)}></YellowButton>
    </View>
);
}

export default SinglePost
