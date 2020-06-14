import { AsyncStorage } from 'react-native';
import firebaseService from '../../services/firebase';

const onPressLogin = async () => {
    try{
        await firebaseService.login(user, pass)
        await AsyncStorage.setItem(USEREMAIL, user);
        await AsyncStorage.setItem(PASSW, pass);
        navigation.navigate('MenuApadrinapp')
    } catch (e) {
        alert('Por favor ingres los datos correctos')
    }
}
export default onPressLogin