import { AsyncStorage } from 'react-native';

const load = async () => {
    try {
        let user = await AsyncStorage.getItem(USEREMAIL)
        let pass = await AsyncStorage.getItem(PASSW)

        if (USEREMAIL !== null) {
            setUser(user);
        }
        if (PASSW !== null) {
            setPass(pass);
        }
    } catch (e) {
        alert(err);
    }
};

export default load