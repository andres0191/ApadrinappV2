import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TextInput, AsyncStorage } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import firebaseService from '../../services/firebase';
import HollowInput from '../../source/Components/HollowInputSpace';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
/* import Lista from '../publicacionesrappi/List' */

const Transferencia = ({ navigation }) => {
  const [monto, setMonto] = useState('')
  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
        <View style={styles.headerLeft}>
          <PrevScreenButton onPress={() => navigation.navigate('PublicacionesRappi')}></PrevScreenButton>
        </View>
        <View style={styles.headerMiddle}>
          <Text style={styles.PageTitle}>Apadrinar</Text>
        </View>
        <View style={styles.headerRight}></View>
      </View>
        <View style={styles.body}>
          <View style={styles.ElevatePic}>
            <Image source={require('../../assets/Cabeceras/queDeseas.png')} style={styles.logo}></Image>
          </View>
            <View style={styles.info}>
              <View style={styles.InputInfo}>
                <Text style={styles.YellowFont}>Monto a invertir</Text>
                <TextInput
                placeholder='  $' 
                placeholderTextColor='#472387'
                style={styles.inputText}
                value = {monto}
                onChange = {(e) => setMonto(e.nativeEvent.text)}/>
              </View>
              <View style={styles.InputInfo}>
                <Text style={styles.YellowFont}>Apadrinarás a</Text>
                <HollowInput title= "Nombre"></HollowInput>
              </View>
            </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
            <WhiteButton title='Atras' onPress={() => navigation.navigate('List')}></WhiteButton>
          </View>
          <View style={[styles.flex, styles.footerRight]}>
            <YellowButton title='Apadrinar' onPress={() => navigation.navigate('EstadoCuenta')}></YellowButton>
          </View>
        </View>
        </ScrollView>
    </View>
    )
  }
export default Transferencia


