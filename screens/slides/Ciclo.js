
import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import styles from './styles';
import WhiteButton from '../../source/Components/WhiteButton'

const Ciclo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.body}>
        <ImageBackground source={require('../../assets/Slides/ciclo.svg')} style={styles.CicloImage} />
      </View>
     <View style={styles.footer}>
      <ImageBackground style={styles.ImageBack} source={require('../../assets/Slides/FondoBorde.svg')} style={styles.logo}>
        <Text style={styles.parragraph}>Aquí estamos buscando conectarnos y ayudarnos para cumplir nuestros sueños, porque juntos siempre es más fáci. Ayudar cumpliendo sueños es bastante maravilloso.</Text>
        <WhiteButton syle={styles.bttn} title='Siguiente' onPress={() => navigation.navigate('MenuApadrinapp')}></WhiteButton>
      </ImageBackground>
     </View>
    </View>
  );
}

 export default Ciclo