import React from 'react'
import { Text, View, ImageBackground } from 'react-native' 
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton'

const Padrino = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
      <ImageBackground source={require('../../assets/slides/padrino.svg')} style={styles.logo} />
      </View> 
     <View style={styles.footer}> 
     <ImageBackground style={styles.ImageBack} source={require('../../assets/slides/fondo_borde.svg')} style={styles.logo}>
     <Text style={styles.parragraph}> Muchos quisieran ayudar a otros, pero buscando cumplir  los sueños propios, a veces se hace difícil. Un viaje, una compra o quizás simplemente unos ahorros. </Text>
     <WhiteButton syle={styles.bttn} title='Next' onPress={() => navigation.navigate('padrino')}></WhiteButton>
     </ImageBackground>

     </View>
    </View>
  );
}

 export default Padrino
 