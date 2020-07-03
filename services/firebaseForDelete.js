import * as firebase from 'firebase'
import 'firebase/firebase-firestore'
import { Alert } from 'react-native';

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
class FirebaseDelete{
    /* constructor(){
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
    } */

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
            Alert('No haz realizado publicaciones todavia')
        }
        return onePost
    };

    /* deleteUser() {
        const dbRef = firebase.firestore().collection('users').doc(this.props.route.params.userkey)
          dbRef.delete().then((res) => {
              console.log('Item removed from database')
              this.props.navigation.navigate('UserScreen');
          })
      } */

    deletePublication = async (publicationId) => {
        try {
            await firebase.firestore().collection('publications').doc(publicationId).delete();
        } catch (error) {
            Alert.alert('Item removed from database')
        }
    };
}

const firebaseDeleteService = new FirebaseDelete()
export default firebaseDeleteService