import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PrevScreenButton from '../../../source/Components/PrevScreenButton';
import NameLogin from '../../NameLogin/NameLogin';
import firebaseService from '../../../services/firebase'


const MenuDreamer = ({ navigation }) => {
  const [userId, setUserId] = useState('')

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

  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <PrevScreenButton onPress={() => navigation.navigate('login')}></PrevScreenButton>
            <Text style={styles.PageTitle}>Menú</Text>
            <NameLogin></NameLogin>
          </View>
          <View style={styles.ElevatePic}>
          <Image source={require('../../../assets/Cabeceras/queDeseas.png')} style={styles.logo}></Image>
        </View>
        </View>
      <View style={styles.Categorias}>
        <Text style={styles.HeaderText}>Categorías</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.flexstyle}>
          <TouchableOpacity onPress={() => navigation.navigate('SinglePostRappi', {userId: userId})} >
            <View style={styles.estadoCuenta}>
            <Image style={styles.imageMenu} source={require('../../../assets/Menu/estadoDelDream.png')}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('PostRappi')}>
            <View style={styles.MoneyStyle}>
            <Image style={styles.imageMenu} source={require('../../../assets/Menu/publicarDream.png')}/>
            </View>
          </TouchableOpacity> 
        </View>
        </View>
      </ScrollView>
    </View>
    )
  }

export default MenuDreamer
