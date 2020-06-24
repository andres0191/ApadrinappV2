import * as firebase from 'firebase'
import 'firebase/firebase-firestore'

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
    /* constructor(){
        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
    } */
    getOnePublication = async (rappiId) => {
        try {
            const fire = firebase.firestore()
            return await fire.collection('publications').where('rappiId', '==', rappiId).get();
        } catch (error) {
            Alert('El Id del rappitendero no se encuentra')
        }
    }
}

const firebaseGetService = new FirebaseGet()
export default firebaseGetService