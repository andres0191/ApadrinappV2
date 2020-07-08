import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView, Image } from 'react-native';
import firebaseService from '../../../services/firebase'
import 'firebase/firebase-firestore';
import styles from './stylePost';
import { useNavigation } from '@react-navigation/native';
import PrevScreenButton from '../../../source/Components/PrevScreenButton';
import _ from 'lodash';
import firebaseGetService from '../../../services/firebaseForGet';
import firebaseDeleteService from '../../../services/firebaseForDelete';
import NameLogin from '../../NameLogin/NameLogin';
import YellowButton from '../../../source/Components/YellowButton';

const SinglePost = () => {
const [singlePost, setPost] = useState([]);
const [rappiId, setRappiId] = useState("");
let [publicationId, setPublicationId] = useState([]);

const navigation = useNavigation();

const LoadUserId = async () => {
    try {
        const RappiId = await firebaseService.getUserId();
        const onlyPost = await firebaseGetService.getOnePublication(RappiId);
        const onePost = await firebaseGetService.getSinglePublication(RappiId);
        let itemId = onePost.id;
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
    <View style={styles.header}>
            <View style={styles.headerLeft}>
                <PrevScreenButton style={styles.back} onPress={() => navigation.navigate('MenuDreamer')}></PrevScreenButton>
                <Text style={styles.PageTitle}>Estado del Dream</Text>
                <NameLogin></NameLogin>
            </View>
            <View style={styles.ElevatePic}>
                <Image source={require('../../../assets/Cabeceras/estadoDream.png')} style={styles.logo}></Image>
            </View>
    </View>
            <View style={styles.AllBoxes}>
            <Text style={styles.titulo}>Tu publicacion es:</Text>
                {singlePost.map(item  => (
                     <View key={item.id} style={styles.Boxes}>
                        <Text style={styles.ItemName}>{item.name}</Text>
                        <Text style={styles.ItemMonto}>Cantidad solicitada: $ {item.monto}</Text>
                        <Text style={styles.ItemDescription}>{item.description}</Text>
                    </View>
                ))}
                {/* {singlePost.map(item  => (
                     <View key={item.id} style={styles.Boxes}>
                        <Text style={styles.ItemDescription}>Has recogido: $ {item.monto}</Text>
                    </View>
                ))} */}
            </View>
            <View style={styles.buttons}>
            <YellowButton title='Eliminar' onPress={() => OnPressDelete(publicationId)}></YellowButton>
            </View>
            <View style={styles.footer}>
            </View>
    </ScrollView>
    </View>
);
}

export default SinglePost
