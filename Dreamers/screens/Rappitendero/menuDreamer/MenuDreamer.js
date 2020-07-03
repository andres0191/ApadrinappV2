import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, Alert, Button, Linking, ScrollView, AsyncStorage } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NameLogin from '../../NameLogin/NameLogin';
import firebaseService from '../../../services/firebase';


const MenuDreamer = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const url = 'https://www.youtube.com/watch?v=P5LPr-69BaA';

  const LoadUserId = async () => {
    try {
      const UserId = await firebaseService.getUserId()
      setUserId(UserId)
    } catch (error) {
      alert('No user')
    }
  }
  useEffect(() => {
    LoadUserId()
}, []);
const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.PageTitle}>Menu</Text>
            <NameLogin></NameLogin>
            {/* <Text>{userId}</Text> */}
          </View>
          <View style={styles.ElevatePic}>
          <Image source={require('../../../assets/Cabeceras/queDeseas.png')} style={styles.logo}></Image>
        </View>
        </View>
      <View style={styles.Categorias}>
        <Text style={styles.HeaderText}>Categorias</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.flexstyle}>
          <TouchableOpacity onPress={() => navigation.navigate('EstadoCuentaR', {userId: userId})} >
            <Image source={require('../../../assets/Menu/estadoDelDream.png')} style={styles.estadoCuenta} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('PostRappi')}>
            <Image source={require('../../../assets/Menu/publicarDream.png')} style={styles.MoneyStyle} />
          </TouchableOpacity>
          <View>
            <OpenURLButton url={url}>Tutorial</OpenURLButton>
          </View> 
        </View>
        </View>
      </ScrollView>
    </View>
    )
  }

export default MenuDreamer
