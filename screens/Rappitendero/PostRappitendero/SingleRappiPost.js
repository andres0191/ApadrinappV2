import React, { useState, useEffect } from 'react';
import { View, Text, YellowBox, Alert, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import firebaseService from '../../../services/firebase'
import 'firebase/firebase-firestore';
import styles from './stylePost';
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
        await navigation.navigate('MenuDreamer');
    } catch (error) {
        Alert.alert('No se logro eliminar la publicación')
    }
};

return(
    <View style={styles.container}>
    <ScrollView>
        <PrevScreenButton onPress={() => navigation.navigate('MenuDreamer')}></PrevScreenButton>
            <View style={styles.AllBoxes}>
                {singlePost.map(item  => (
                     <View key={item.id} style={styles.Boxes}>
                        <Text style={styles.ItemName}>{item.name}</Text>
                        <Text style={styles.ItemMonto}>Cantidad solicitada: $ {item.monto}</Text>
                        <Text style={styles.ItemDescription}>{item.description}</Text>
                        {/* <Text style={styles.ItemDescription}>{item.id}</Text> */}
                    </View>
                ))}
            </View>
            <YellowButton title='Eliminar' onPress={() => OnPressDelete(publicationId)}></YellowButton>
            </ScrollView>
    </View>
);
}

export default SinglePost
