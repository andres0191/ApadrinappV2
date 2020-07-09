import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
import { Alert } from 'react-native'

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
class FirebaseGet{

    getOnePublication = async (rappiId) => {
        let onePost = [];
        try {
            const fire = firebase.firestore();
            const snapshot = await fire.collection('publications').where('rappiId', "==", rappiId).get();
                snapshot.forEach((doc) => {
                    let obj = {id:doc.id, name:doc.data().name, monto:doc.data().monto, description:doc.data().description, createdAt:doc.data().createdAt, montoRecogido:doc.data().montoRecogido};
                    onePost.push(obj)
            });
        } catch (error) {
            Alert.alert('No has realizado publicaciones todavia');
        }
        return onePost
    };

    getSinglePublication = async (rappiId) => {
        let onePost = {};
        try {
            const fire = firebase.firestore();
            const snapshot = await fire.collection('publications').where('rappiId', "==", rappiId).get();
                snapshot.forEach((doc) => {
                    let obj = {id:doc.id, name:doc.data().name, monto:doc.data().monto, description:doc.data().description, createdAt:doc.data().createdAt, montoRecogido:doc.data().montoRecogido};
                    onePost = {...obj};
            });
        } catch (error) {
            Alert.alert('No has realizado publicaciones todavia');
        }
        return onePost
    };

    getTransactions = async (userId) => {
        let showTransactions = [];
        try {
            const fire = firebase.firestore();
            const snapshot = await fire.collection('transacciones').where('userId', "==", userId).get();
                snapshot.forEach((doc) => {
                    let obj = {id:doc.id, monto:doc.data().monto, publicationId:doc.data().publicationId, createdAt:doc.data().createdAt, userId:doc.data().userId, rappiName:doc.data().rappiName, publicationTime:doc.data().publicationTime};
                    showTransactions.push(obj)
            });
        } catch (error) {
            Alert.alert('No tienes transacciones para mostrar');
        }
        return showTransactions;
    };
}

const firebaseGetService = new FirebaseGet()
export default firebaseGetService