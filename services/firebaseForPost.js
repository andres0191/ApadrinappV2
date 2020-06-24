import * as firebase from 'firebase'
import 'firebase/firebase-firestore'
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
class FirebasePost{
    /* constructor(){
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
    } */
    savePublication = async (name, monto, description, rappiId) => {
        try {
            const fire = firebase.firestore()
            await fire.collection('publications').add({
                name,
                monto,
                description,
                rappiId,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                montoRecogido: {}
            });
        } catch (error) {
            Alert('La publicación no se pudo realizar correctamente')
        }
    }

    saveTransaction = async (monto, userId, publicationId) => {
        try {
            const fire = firebase.firestore()
            await fire.collection('transacciones').add({
                monto,
                userId,
                publicationId,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
        } catch (error) {
            Alert('La transacción no se pudo realizar correctamente')
        }
    }
}

const firebasePostService = new FirebasePost()
export default firebasePostService