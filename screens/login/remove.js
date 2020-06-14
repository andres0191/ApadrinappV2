import {  AsyncStorage } from 'react-native';

const remove = async () => {
    try {
        await AsyncStorage.removeItem(USEREMAIL);
        await AsyncStorage.removeItem(PASSW);
    } catch (err) {
        alert(err);
    }

    finally {
        setUser("");
        setPass("");
    }
};
export default remove