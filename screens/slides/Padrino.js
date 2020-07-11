
import React from 'react'
import { Text, View, ImageBackground, Image } from 'react-native' 
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton';
import PrevScreenButton from '../../source/Components/PrevScreenButton';

const Padrino = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <PrevScreenButton onPress={() => navigation.navigate('Dreamer')}></PrevScreenButton> */}
      <View style={styles.header} />
      <View style={styles.body}>
        <Image source={require('../../assets/Slides/padrino.png')} style={styles.IconImage} />
      </View>
     <View style={styles.footer}>
      <ImageBackground source={require('../../assets/Slides/FondoBorde.svg')} style={styles.logo}>
        <Text style={styles.parragraph}> Muchos quisieran ayudar a otros, pero buscando cumplir  los sueños propios, a veces se hace difícil. Un viaje, una compra o quizás simplemente unos ahorros. </Text>
        <WhiteButton title='Siguiente' onPress={() => navigation.navigate('Ciclo')}></WhiteButton>
      </ImageBackground>
     </View>
    </View>
  );
}

export default Padrino