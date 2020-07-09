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
import { sin } from 'react-native-reanimated';

const SinglePost = () => {
const [singlePost, setPost] = useState([]);
const [rappiId, setRappiId] = useState("");
let [publicationId, setPublicationId] = useState('');
let [timePassed, setTimePassed] = useState('');
let [timeDue, setTimeDue] = useState('');

const navigation = useNavigation();

const LoadUserId = async () => {
    try {
        const RappiId = await firebaseService.getUserId();
        const onlyPost = await firebaseGetService.getOnePublication(RappiId);
        const onePost = await firebaseGetService.getSinglePublication(RappiId);
        let itemId = onePost.id;
        let itemTime = onePost.createdAt.toDate();
        let oneMonth = new Date(itemTime);
        oneMonth.setMonth(oneMonth.getMonth() + 1);
        if (!itemId) {
            Alert.alert('Todavia no has realizado ninguna publicacion')
            /* await navigation.navigate('PostRappi'); */
        }
        setTimePassed(getTimeLeft(itemTime, oneMonth));
        setPost(onlyPost);
        /* setTimeDue(oneMonth); */
        setRappiId(RappiId);
    } catch (error) {
      Alert.alert('No user');
    }
  };

  function getTimeLeft (itemTime, oneMonth) {
    let currentDate = new Date();
    var Difference_In_Time = currentDate.getTime() - itemTime.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    var currentDateString = oneMonth.toJSON().slice(0,10).replace(/-/g,'/');
    setTimeDue(currentDateString);

    return Difference_In_Days.toFixed(0);
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
            <Text style={styles.titulo}>Tu publicación actual:</Text>
                {singlePost.map(item  => (
                     <View key={item.id} style={styles.Boxes}>
                        <Text style={styles.ItemName}>{item.name}</Text>
                        <Text style={styles.ItemMonto}>Cantidad solicitada: $ {item.monto}</Text>
                        <Text style={styles.ItemDescription}>Sueño: {item.description}</Text>
                        <Text style={styles.ItemDescription}>Fecha de publicación: {item.createdAt.toDate().toDateString()}</Text>
                    </View>
                ))}
                    <View style={styles.Boxes}>
                        <Text style={styles.publicationValidity}>Recuerda que tu publiación tendra vigencia hasta la fecha: {timeDue}. Si la cantidad solicitada
                        se recoge antes de que se cumpla el tiempo de vigencia entonces comenzara el proceso del prestamo.</Text>
                        <Text style={styles.passedTime}>Tu publiación lleva {timePassed} dias desde su publicación</Text>
                    </View>
            </View>
            {/* <View style={styles.buttons}>
                    <YellowButton title='Eliminar' onPress={() => OnPressDelete(publicationId)}></YellowButton>
                </View> */}
    </ScrollView>
            <View style={styles.footer}>
                <View style={styles.buttons}>
                    <YellowButton title='Eliminar' onPress={() => OnPressDelete(publicationId)}></YellowButton>
                </View>
            </View>
    </View>
);
}

export default SinglePost
