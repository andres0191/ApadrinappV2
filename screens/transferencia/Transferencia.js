import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TextInput, AsyncStorage } from 'react-native';
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import YellowButton from '../../source/Components/YellowButton';
import HollowInput from '../../source/Components/HollowInputSpace';
import PrevScreenButton from '../../source/Components/PrevScreenButton';
import NameLogin from '../NameLogin/NameLogin';

const Transferencia = ({ navigation }) => {
  const [monto, setMonto] = useState('')
  return (
    <View style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <PrevScreenButton onPress={() => navigation.navigate('PublicacionesRappi')}></PrevScreenButton>
            <Text style={styles.PageTitle}>Apadrinar</Text>
            <NameLogin></NameLogin>
          </View>
          <View style={styles.ElevatePic}>
          <Image source={require('../../assets/Cabeceras/apadrinar.png')} style={styles.logo}></Image>
        </View>
        </View>
        <View style={styles.body}>
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
                <HollowInput></HollowInput>
              </View>
            </View>
        </View>
        <View style={styles.footer}>
          <View style={[styles.flex, styles.footerLeft]}>
            <WhiteButton title='Atras' onPress={() => navigation.navigate('PublicacionesRappi')}></WhiteButton>
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


