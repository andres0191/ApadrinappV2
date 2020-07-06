import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TextInput, Alert } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import firebaseService from '../../services/firebase';
import HollowInput from '../../source/Components/HollowInputSpace';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import NameLogin from '../NameLogin/NameLogin';
import firebaseGetService from '../../services/firebaseForGet';


const EstadoCuenta = ({ route, navigation }) => {

  const [cantidad, setCantidad] = useState(0);
  const [misTrans, setTrans] = useState([]);
  const [userId, setUser] = useState('');

  useEffect(() => {
    const UserId = firebaseService.getUserId()
    setUser(UserId)
    LoadUserTransactions(UserId)
}, []);

const LoadUserTransactions = async (userId) => {
  try {
      const myTransactions = await firebaseGetService.getTransactions(userId);
      setTrans(myTransactions);
      let c = myTransactions.forEach(element => c += int(element.monto));
      setCantidad(c);
  } catch (error) {
    Alert.alert('No hay transacciones para mostrar')
  }
}


  const [user, setMonto] = useState('')
  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <PrevScreenButton onPress={() => navigation.navigate('MenuApadrinapp')}></PrevScreenButton>
          <Text style={styles.PageTitle}>Inversión actual</Text>
          <NameLogin></NameLogin>
          <Text>{userId}</Text>
        </View>
        <View style={styles.ElevatePic}>
          <Image source={require('../../assets/Cabeceras/estadoDeCuentaHeader.png')} style={styles.logo}></Image>
        </View>
      </View>
      <View style={styles.body}>
      <View style={styles.info}>
          <View style={styles.InputInfo}>
            <Text style={styles.YellowFont}>Inversion actual </Text>
            <HollowInput>{cantidad}</HollowInput>
          </View>
          <View style={styles.InputInfo}>
            <Text style={styles.YellowFont}>Enviar a Rappipay</Text>
            <TextInput
                placeholder='$'
                keyboardType= 'numeric'
                placeholderTextColor='#472387'
                style={styles.inputText}
                value = {user}
                onChange = {(e) => setMonto(e.nativeEvent.text)}/>
          </View>
        </View>
        <View style={styles.AllBoxes}>
                {misTrans.map(item  => (
                     <View key={item.id} style={{ backgroundColor: 'red' }}>
                        <Text style={styles.ItemName}>Haz ayudado a: {item.rappiName}</Text>
                        <Text style={styles.ItemMonto}>Tu monto invertido fue de: ${item.monto}</Text>
                        {/* <Text style={styles.ItemDate}>{item.createdAt}</Text> */}
                    </View>
                ))}
            </View>
      </View>
      <View style={styles.footer}>
        <View style={[styles.flex, styles.footerLeft]}>
          <WhiteButton title='Menu' onPress={() => navigation.navigate('MenuApadrinapp')}></WhiteButton>
        </View>
        <View style={[styles.flex, styles.footerRight]}>
          <YellowButton title='Enviar' onPress={() => navigation.navigate('MenuApadrinapp')}></YellowButton>
        </View>
      </View>
      </ScrollView>
    </View>
    )
  }

export default EstadoCuenta