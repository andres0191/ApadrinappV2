import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TextInput, Alert } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import firebaseService from '../../services/firebase';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import NameLogin from '../NameLogin/NameLogin';
import firebaseGetService from '../../services/firebaseForGet';


const EstadoCuenta = ({ navigation }) => {

  const [cantidad, setCantidad] = useState(0);
  const [misTrans, setTrans] = useState([]);
  const [userId, setUser] = useState('');
  const [monto, setMonto] = useState('');
  const [disponible, setDisponible] = useState(0);
  const [Dreamer, setDreamer] = useState('');
  const [porMes, setPorMes] = useState('');
  

  useEffect(() => {
    const UserId = firebaseService.getUserId()
    setUser(UserId)
    LoadUserTransactions(UserId)
}, []);

const LoadUserTransactions = async (userId) => {
  try {
      const myTransactions = await firebaseGetService.getTransactions(userId);
      const Dreamer  = await firebaseService.getUserName();
      setDreamer(Dreamer);
      setTrans(myTransactions);
      let totalAmount = 0;
      myTransactions.forEach(element => totalAmount = +totalAmount + +(element.monto));
      setCantidad('$' + totalAmount);
      setDisponible( (totalAmount * 8) / 100);
      setPorMes((totalAmount * 1.3) / 100);
      
  } catch (error) {
    Alert.alert('No hay transacciones para mostrar')
  }
  
}

const TransaccionStatus = async (userId) => {
  try {
      if ( (disponible) >= (monto) && (disponible ) != (0)){
        Alert.alert(
          `${Dreamer}`,
          "Tu dinero estará disponible el 13 de Feb de 2021 y la rentabilidad sera de: $" + `${disponible}`, 
          [
            {text: 'Aceptar', onPress: () => navigation.navigate('MenuApadrinapp')}
          ],
        );} else {
          Alert.alert('No tienes fondos suficientes')
        }
      } catch (error) {
    Alert.alert('error')
  }
}

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <PrevScreenButton onPress={() => navigation.navigate('MenuApadrinapp')}></PrevScreenButton>
          <Text style={styles.PageTitle}>Inversión actual</Text>
          <NameLogin></NameLogin>
        </View>
        <View style={styles.ElevatePic}>
          <Image source={require('../../assets/Cabeceras/estadoDeCuentaHeader.png')} style={styles.logo}></Image>
        </View>
      </View>
      <View style={styles.body}>
          <View style={styles.InputInfo}>
            <Text style={styles.YellowFont}>Inversion actual </Text>
            <Text style={styles.textPurple}>{cantidad}</Text>
          </View>
          <View style={styles.InputInfo}>
            <Text style={styles.YellowFont}>Tu interes generado es de: </Text>
            <Text style={styles.inputText}>{'$' + porMes}</Text>
          </View>
          <View style={styles.InputInfo}>
            <Text style={styles.YellowFont}>Enviar a Rappipay</Text>
            <TextInput
                placeholder='$'
                keyboardType= 'numeric'
                placeholderTextColor='#472387'
                style={styles.inputText}
                value = {monto}
                onChange = {(e) => setMonto(e.nativeEvent.text)}/>

        </View>
      </View>
      <View style={styles.footer}>
        <View style={[styles.flex, styles.footerRight]}>
          <YellowButton title='Enviar'
          activeOpacity={0.6}
          onPress={() => {TransaccionStatus()}}>
          </YellowButton>
        </View> 
      </View>
      </ScrollView>
    </View>
    )
  }

export default EstadoCuenta