import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TextInput } from 'react-native';
import styles from './styles';
import WhiteButton from '../../../source/Components/WhiteButton';
import YellowButton from '../../../source/Components/YellowButton';
import firebaseService from '../../../services/firebase';
import HollowInput from '../../../source/Components/HollowInputSpace';
import PrevScreenButton from '../../../source/Components/PrevScreenButton';
import NameLogin from '../../NameLogin/NameLogin';

const EstadoCuentaR = ({ route, navigation }) => {

  const [cantidad, setCantidad] = useState('')


  const [user, setMonto] = useState('')
  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
        <View style={styles.headerLeft}>
          <PrevScreenButton onPress={() => navigation.navigate('MenuDreamer')}></PrevScreenButton>
          <Text style={styles.PageTitle}>Tienes: </Text>
          <NameLogin></NameLogin>
        </View>
        <View style={styles.ElevatePic}>
          <Image source={require('../../../assets/Cabeceras/estadoDeCuentaHeader.png')} style={styles.logo}></Image>
        </View>
        <View style={styles.info}>
          <View style={styles.InputInfo}>
            <Text style={styles.YellowFont}>Inversion actual </Text>
            <HollowInput title="100000"></HollowInput>
          </View>
          <View style={styles.InputInfo}>
            <Text style={styles.YellowFont}>Enviar a Rappipay</Text>
            <TextInput
                placeholder='$'
                placeholderTextColor='#472387'
                style={styles.inputText}
                value = {user}
                onChange = {(e) => setMonto(e.nativeEvent.text)}/>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={[styles.flex, styles.footerLeft]}>
          <WhiteButton title='Menu' onPress={() => navigation.navigate('MenuDreamer')}></WhiteButton>
        </View>
        <View style={[styles.flex, styles.footerRight]}>
          <YellowButton title='Enviar' onPress={() => navigation.navigate('MenuDreamer')}></YellowButton>
        </View>
      </View>
      </ScrollView>
    </View>
    )
  }

export default EstadoCuentaR