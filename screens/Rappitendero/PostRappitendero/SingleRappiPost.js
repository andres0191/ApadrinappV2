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
/* const [isLoading, setLoading] = useState(true); */

const navigation = useNavigation();

const LoadUserId = async () => {
    try {
        const RappiId = await firebaseService.getUserId();
      /* setLoading(false) */
        const onePost = await firebaseGetService.getOnePublication(RappiId)
        setPost(onePost)
        setRappiId(RappiId);
    } catch (error) {
      Alert('No user')
    }
  }

useEffect(() => {
    LoadUserId()
}, []);

const OnPressDelete = async (rappiId) => {
    try {
        await firebaseDeleteService.deletePublication(rappiId);
        /* await navigation.navigate('PostRappi'); */
    } catch (error) {
        Alert('No se logro eliminar la publicación')
    }
};

const openTwoButtonAlert=(rappiId)=>{
    Alert(
      'Borrar publicación',
      'Estas seguro?',
      [
        {text: 'Sí', onPress: () => OnPressDelete(rappiId)},
        {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
      ],
      {
        cancelable: true
      }
    );
  }


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
            <YellowButton title='Eliminar Publicación' onPress={() => openTwoButtonAlert(rappiId)}></YellowButton>
    </View>
);
}

export default SinglePost
