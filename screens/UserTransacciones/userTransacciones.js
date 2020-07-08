import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TextInput, Alert } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import firebaseService from '../../services/firebase';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import NameLogin from '../NameLogin/NameLogin';
import firebaseGetService from '../../services/firebaseForGet';


const UserTransacciones = ({ navigation }) => {

  const [misTrans, setTrans] = useState([]);
  const [userId, setUser] = useState('');
  const [date, setDate] = useState('')

  useEffect(() => {
    const UserId = firebaseService.getUserId()
    setUser(UserId)
    LoadUserTransactions(UserId)
}, []);

const LoadUserTransactions = async (userId) => {
  try {
      const myTransactions = await firebaseGetService.getTransactions(userId);
      setTrans(myTransactions);
  } catch (error) {
    Alert.alert('No hay transacciones para mostrar')
  }
}

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
            <View style={styles.headerLeft}>
            <PrevScreenButton onPress={() => navigation.navigate('MenuApadrinapp')}></PrevScreenButton>
            <Text style={styles.PageTitle}>Transacciones Realizadas</Text>
            <NameLogin></NameLogin>
            </View>
            <View style={styles.ElevatePic}>
            <Image source={require('../../assets/Cabeceras/estadoDeCuentaHeader.png')} style={styles.logo}></Image>
            </View>
        </View>
        <View style={styles.body}>
            <View style={styles.info}>
            </View>
            <View style={styles.AllBoxes}>
                {misTrans.map(item  => (
                     <View key={item.id} style={styles.Boxes}>
                        <Text style={styles.ItemName}>Haz ayudado a: {item.rappiName}</Text>
                        <Text style={styles.ItemMonto}>Tu monto invertido fue de: ${item.monto}</Text>
                        <Text style={styles.ItemDate}>La fecha de tu transacción fue en: {item.createdAt.toDate().toDateString()}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.InputInfo}>
                <Text style={styles.YellowFont}>Juntos lograremos la meta!!</Text>
              </View>
        </View>
        <View style={styles.footer}>
            <View style={[styles.flex, styles.footerLeft]}>
            <WhiteButton title='Menu' onPress={() => navigation.navigate('MenuApadrinapp')}></WhiteButton>
            </View>
        </View>
      </ScrollView>
    </View>
    )
  }

export default UserTransacciones